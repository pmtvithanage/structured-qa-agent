from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

from schemas import TopicSummary

load_dotenv()   # replaces userdata.get(...)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a patient teacher who explains topics "
               "to complete beginners. Use simple words and no jargon."),
    ("human", "Explain this topic: {topic}"),
])

llm = ChatGoogleGenerativeAI(model="gemini-3.5-flash", temperature=0)
chain = prompt | llm.with_structured_output(TopicSummary)
