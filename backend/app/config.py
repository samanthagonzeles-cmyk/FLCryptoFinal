"""Configuration settings for the FL-Crypto Backend"""
from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = True
    
    # Supabase
    SUPABASE_URL: str
    SUPABASE_KEY: str
    SUPABASE_SERVICE_ROLE_KEY: str
    
    # CORS
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8000"]
    
    # JWT
    JWT_SECRET_KEY: str = "your-secret-key-change-in-production"
    JWT_ALGORITHM: str = "HS256"
    
    # Federated Learning
    MIN_CLIENTS: int = 2
    MAX_CLIENTS: int = 100
    EPOCHS: int = 5
    BATCH_SIZE: int = 32
    LEARNING_RATE: float = 0.01
    
    # Cryptography
    ENABLE_CRYPTO_VERIFICATION: bool = True
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
