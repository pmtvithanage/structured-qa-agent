from typing import Literal
from pydantic import BaseModel, Field


class TopicSummary(BaseModel):
    """A beginner-friendly summary of one topic."""

    title: str = Field(description="Short, clear title of the topic")
    summary: str = Field(description="Two simple sentences explaining the topic")
    key_points: list[str] = Field(description="Exactly 3 short key points")
    difficulty: Literal["beginner", "intermediate", "advanced"] = Field(
        description="How hard the topic is to learn"
    )
    example: str = Field(description="One everyday example that makes the idea concrete")