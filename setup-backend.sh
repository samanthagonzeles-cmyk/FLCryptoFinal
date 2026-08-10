#!/bin/bash

echo "=========================================="
echo "FL-Crypto Backend Setup"
echo "=========================================="

cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "⚠️  Please update .env with your Supabase credentials"
fi

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "To start the backend:"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  python main.py"
