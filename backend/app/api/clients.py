"""Client Management Endpoints"""
from fastapi import APIRouter, HTTPException, Query
from typing import List
from app.db import get_db
from app.schemas import ClientCreate, ClientResponse

router = APIRouter()

@router.post("/clients", response_model=ClientResponse)
async def create_client(client: ClientCreate):
    """Register a new client"""
    try:
        db = get_db()
        
        # Check if client already exists
        existing = db.table("clients").select("*").eq("client_id", client.client_id).execute()
        if existing.data:
            raise HTTPException(status_code=400, detail="Client already registered")
        
        # Insert new client
        result = db.table("clients").insert({
            "name": client.name,
            "client_id": client.client_id,
            "public_key": client.public_key,
            "status": client.status,
        }).execute()
        
        if result.data:
            return result.data[0]
        else:
            raise HTTPException(status_code=500, detail="Failed to create client")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/clients", response_model=List[ClientResponse])
async def list_clients(status: str = Query(None)):
    """List all clients, optionally filtered by status"""
    try:
        db = get_db()
        query = db.table("clients").select("*")
        
        if status:
            query = query.eq("status", status)
        
        result = query.execute()
        return result.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/clients/{client_id}", response_model=ClientResponse)
async def get_client(client_id: str):
    """Get a specific client by ID"""
    try:
        db = get_db()
        result = db.table("clients").select("*").eq("client_id", client_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Client not found")
        
        return result.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/clients/{client_id}", response_model=ClientResponse)
async def update_client(client_id: str, client: ClientCreate):
    """Update a client's information"""
    try:
        db = get_db()
        
        # Verify client exists
        existing = db.table("clients").select("*").eq("client_id", client_id).execute()
        if not existing.data:
            raise HTTPException(status_code=404, detail="Client not found")
        
        # Update client
        result = db.table("clients").update({
            "name": client.name,
            "public_key": client.public_key,
            "status": client.status,
        }).eq("client_id", client_id).execute()
        
        if result.data:
            return result.data[0]
        else:
            raise HTTPException(status_code=500, detail="Failed to update client")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/clients/{client_id}")
async def delete_client(client_id: str):
    """Delete a client (ban them)"""
    try:
        db = get_db()
        
        # Verify client exists
        existing = db.table("clients").select("*").eq("client_id", client_id).execute()
        if not existing.data:
            raise HTTPException(status_code=404, detail="Client not found")
        
        # Delete client
        result = db.table("clients").delete().eq("client_id", client_id).execute()
        
        return {"message": "Client deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
