"""
FastAPI Backend for Federated Learning with Supabase Integration
"""
import os
from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.api import health, clients, aggregation, models, training
from app.db import supabase_client
from app.config import settings

# Lifespan context manager
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting up application...")
    try:
        # Test Supabase connection
        response = supabase_client.get_supabase().table("health_check").select("*").limit(1).execute()
        print("✓ Supabase connection successful")
    except Exception as e:
        print(f"⚠ Supabase connection warning: {e}")
    yield
    # Shutdown
    print("Shutting down application...")

app = FastAPI(
    title="FL-Crypto Backend",
    description="Federated Learning with Cryptographic Verification Backend",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(clients.router, prefix="/api", tags=["Clients"])
app.include_router(aggregation.router, prefix="/api", tags=["Aggregation"])
app.include_router(models.router, prefix="/api", tags=["Models"])
app.include_router(training.router, prefix="/api", tags=["Training"])

@app.get("/")
async def root():
    return {
        "message": "FL-Crypto Backend API",
        "version": "1.0.0",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG
    )
