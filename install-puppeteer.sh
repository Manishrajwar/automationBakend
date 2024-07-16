#!/bin/bash

# Define the custom cache directory
export PUPPETEER_CACHE_DIR=/opt/render/.cache/puppeteer

# Ensure the directory exists and has the correct permissions
mkdir -p $PUPPETEER_CACHE_DIR
chmod -R 755 $PUPPETEER_CACHE_DIR

# Install Puppeteer with the custom cache directory
npx puppeteer install --cache-dir=$PUPPETEER_CACHE_DIR
