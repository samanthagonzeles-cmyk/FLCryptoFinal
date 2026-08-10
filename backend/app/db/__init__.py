"""Supabase Database Connection"""
from supabase import create_client, Client
from app.config import settings
from typing import Optional

class SupabaseClient:
    _instance: Optional[Client] = None
    
    @classmethod
    def get_supabase(cls) -> Client:
        if cls._instance is None:
            cls._instance = create_client(
                settings.SUPABASE_URL,
                settings.SUPABASE_KEY
            )
        return cls._instance
    
    @classmethod
    def get_service_client(cls) -> Client:
        """Get client with service role for admin operations"""
        return create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_SERVICE_ROLE_KEY
        )

supabase_client = SupabaseClient()

# Convenience function for raw queries
def get_db() -> Client:
    return supabase_client.get_supabase()

def get_admin_db() -> Client:
    return supabase_client.get_service_client()
