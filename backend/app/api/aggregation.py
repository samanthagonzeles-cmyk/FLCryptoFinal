"""Aggregation Endpoints"""
from fastapi import APIRouter, HTTPException
from typing import List
from app.db import get_db
from app.schemas import AggregationResultCreate, AggregationResultResponse

router = APIRouter()

@router.post("/aggregations", response_model=AggregationResultResponse)
async def create_aggregation(aggregation: AggregationResultCreate):
    """Create an aggregation result"""
    try:
        db = get_db()
        
        result = db.table("aggregation_results").insert({
            "training_round_id": aggregation.training_round_id,
            "model_id": aggregation.model_id,
            "aggregation_method": aggregation.aggregation_method,
            "num_clients_aggregated": aggregation.num_clients_aggregated,
            "aggregated_weights": aggregation.aggregated_weights,
            "status": "pending",
        }).execute()
        
        if result.data:
            return result.data[0]
        else:
            raise HTTPException(status_code=500, detail="Failed to create aggregation")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/aggregations/{aggregation_id}", response_model=AggregationResultResponse)
async def get_aggregation(aggregation_id: int):
    """Get aggregation result by ID"""
    try:
        db = get_db()
        result = db.table("aggregation_results").select("*").eq("id", aggregation_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Aggregation not found")
        
        return result.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/aggregations/round/{training_round_id}")
async def get_round_aggregation(training_round_id: int):
    """Get aggregation for a specific training round"""
    try:
        db = get_db()
        result = db.table("aggregation_results").select("*").eq("training_round_id", training_round_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="No aggregation found for this round")
        
        return result.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/aggregations/{aggregation_id}/complete")
async def complete_aggregation(aggregation_id: int):
    """Mark aggregation as completed"""
    try:
        db = get_db()
        
        result = db.table("aggregation_results").update({
            "status": "completed"
        }).eq("id", aggregation_id).execute()
        
        if result.data:
            return result.data[0]
        else:
            raise HTTPException(status_code=500, detail="Failed to update aggregation")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
