#!/bin/bash

# Stop all running containers
echo "Stopping running containers..."
docker-compose down

# Remove old volumes and images
echo "Cleaning up old data..."
docker volume rm bookarr-postgres-data prisma || true
docker rmi bookarr:latest || true

# Ensure directories exist
echo "Setting up directories..."
mkdir -p public/images prisma

# Build and start services
echo "Building and starting services..."
docker-compose build
docker-compose up -d

# Wait for database to be ready
echo "Waiting for database to be ready..."
sleep 10

# Initialize database
echo "Initializing database..."
docker-compose exec -T app npx prisma migrate deploy

echo "Rebuild complete! App is running at http://localhost:3000" 