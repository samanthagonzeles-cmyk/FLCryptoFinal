#!/bin/bash

echo "=========================================="
echo "FL-Crypto Frontend Setup"
echo "=========================================="

cd frontend

# Create .env.local file
if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo "✓ .env.local created"
fi

# Install dependencies
npm install

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "To start the frontend:"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "Then open: http://localhost:3000"
