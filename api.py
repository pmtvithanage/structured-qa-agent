from __future__ import annotations

import logging
import os
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from chain import chain
from schemas import TopicSummary

logger = logging.getLogger("structured-qa-agent")

app = FastAPI(
    title="Structured QA Agent",
    description="Beginner-friendly explanations returned in a strict schema.",
    version="1.0.0",
)

origins = [
    origin.strip()
    for origin in os.getenv(
        "FRONTEND_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173"
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ExplainRequest(BaseModel):
    topic: str = Field(min_length=1, max_length=200)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/explain", response_model=TopicSummary)
def explain(payload: ExplainRequest) -> TopicSummary:
    topic = payload.topic.strip()
    if not topic:
        raise HTTPException(status_code=422, detail="Please enter a topic to explain.")

    try:
        return chain.invoke({"topic": topic})
    except Exception as exc:
        logger.exception("Failed to explain topic: %s", topic)
        raise HTTPException(
            status_code=502,
            detail="The explanation service is unavailable right now. Please try again.",
        ) from exc


DIST_DIR = Path(__file__).resolve().parent / "frontend" / "dist"

if DIST_DIR.is_dir():
    app.mount("/", StaticFiles(directory=DIST_DIR, html=True), name="frontend")
else:

    @app.get("/")
    def root() -> dict[str, str]:
        return {
            "message": "Structured QA Agent API is running.",
            "docs": "/docs",
            "frontend": "Run `npm run dev` inside the frontend directory.",
        }
