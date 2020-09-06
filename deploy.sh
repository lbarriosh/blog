#!/bin/sh

echo "Building static site..."
gatsby build

echo "Deploying site to Netlify..."
netlify deploy --prod
