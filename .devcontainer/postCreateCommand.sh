#!/usr/bin/bash

# Trying alternative to doing "postCreateCommand": "bash -i -c 'sudo apt install bat'" in the devcontainer.json
sudo apt update
sudo apt -y install bat

# NVM comes pre-installed on this image, so adding install of Node.js for our
# transpilation tools.
nvm install --lts
nvm use --lts

# Install our build tooling (Pug & Sass)
npm install -g pug-cli
npm install -g sass
