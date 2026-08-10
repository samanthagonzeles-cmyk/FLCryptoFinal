"""Health Check Endpoints"""
from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def health_check():
    """Check if the server is running"""
    return {
        "status": "healthy",
        "service": "FL-Crypto Backend",
        "version": "1.0.0"
    }

@router.get("/health/db")
async def db_health_check():
    """Check database connectivity"""
    try:
        from app.db import get_db
        db = get_db()
        # Try a simple query
        result = db.table("clients").select("*").limit(1).execute()
        return {
            "status": "healthy",
            "database": "supabase",
            "connected": True
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "supabase",
            "connected": False,
            "error": str(e)
        }
