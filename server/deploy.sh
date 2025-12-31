#!/bin/bash
set -e

PROJECT_ID="numida-482023"
IMAGE_NAME="gcr.io/$PROJECT_ID/numida-backend"
REGION="us-central1"

echo "Building image..."
DOCKER_BUILDKIT=1 docker build --platform linux/amd64 -t $IMAGE_NAME .

echo "Pushing to GCR..."
docker push $IMAGE_NAME

echo "Deploying to Cloud Run..."
gcloud run deploy numida-backend \
  --image $IMAGE_NAME \
  --region $REGION \
  --project $PROJECT_ID \
  --allow-unauthenticated

echo "Deployment complete!"

