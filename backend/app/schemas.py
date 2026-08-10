"""Database Models for FL-Crypto"""
from datetime import datetime
from typing import Optional, List, Dict
from pydantic import BaseModel

# ============ Client Models ============

class ClientBase(BaseModel):
    name: str
    client_id: str
    public_key: str
    status: str = "active"  # active, inactive, banned

class ClientCreate(ClientBase):
    pass

class ClientResponse(ClientBase):
    id: int
    created_at: datetime
    updated_at: datetime
    training_rounds: int = 0
    
    class Config:
        from_attributes = True

# ============ Model Models ============

class ModelBase(BaseModel):
    name: str
    model_type: str  # mnist_cnn, cifar_cnn, mlp
    description: Optional[str] = None
    version: str = "1.0.0"

class ModelCreate(ModelBase):
    pass

class ModelResponse(ModelBase):
    id: int
    created_at: datetime
    updated_at: datetime
    status: str = "initialized"  # initialized, training, completed
    
    class Config:
        from_attributes = True

# ============ Training Round Models ============

class TrainingRoundBase(BaseModel):
    model_id: int
    round_number: int
    global_epoch: int

class TrainingRoundCreate(TrainingRoundBase):
    pass

class TrainingRoundResponse(TrainingRoundBase):
    id: int
    status: str  # pending, in_progress, aggregating, completed
    created_at: datetime
    updated_at: datetime
    participating_clients: int = 0
    
    class Config:
        from_attributes = True

# ============ Client Update Models ============

class ClientUpdateBase(BaseModel):
    client_id: str
    training_round_id: int
    model_id: int
    loss: float
    accuracy: float
    parameters_hash: str

class ClientUpdateCreate(ClientUpdateBase):
    update_data: str  # JSON string of model weights

class ClientUpdateResponse(ClientUpdateBase):
    id: int
    status: str  # pending, verified, aggregated, rejected
    created_at: datetime
    signature: Optional[str] = None
    
    class Config:
        from_attributes = True

# ============ Aggregation Models ============

class AggregationResultBase(BaseModel):
    training_round_id: int
    model_id: int
    aggregation_method: str  # fedavg, weighted_avg, median
    num_clients_aggregated: int

class AggregationResultCreate(AggregationResultBase):
    aggregated_weights: str  # JSON string

class AggregationResultResponse(AggregationResultBase):
    id: int
    status: str  # pending, completed, failed
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

# ============ Batch Verification Models ============

class BatchVerificationBase(BaseModel):
    training_round_id: int
    aggregation_hash: str

class BatchVerificationCreate(BatchVerificationBase):
    signatures: List[str]  # BLS signatures from clients
    public_keys: List[str]  # Public keys for verification

class BatchVerificationResponse(BatchVerificationBase):
    id: int
    status: str  # verified, failed
    created_at: datetime
    verification_data: Optional[str] = None
    
    class Config:
        from_attributes = True
