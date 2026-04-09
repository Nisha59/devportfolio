from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List
from openai import OpenAI
from dotenv import load_dotenv
from knowledge_base import PERSONAL_KNOWLEDGE_BASE
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000","https://devportfolio-ui-vert.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# print(client.api_key[0:8])

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@app.get("/")
def root():
    return {"status": "DevPortfolio API running"}

@app.post("/chat")
async def chat(request: ChatRequest):
    def stream():
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": PERSONAL_KNOWLEDGE_BASE},
                *[{"role": m.role, "content": m.content} for m in request.messages]
            ],
            stream=True
        )
        for chunk in response:
            delta = chunk.choices[0].delta.content
            if delta:
                yield delta

    return StreamingResponse(stream(), media_type="text/plain")