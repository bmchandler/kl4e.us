#!/usr/bin/bash

# Trying alternative to doing "postCreateCommand": "bash -i -c 'sudo apt install bat'" in the devcontainer.json
sudo apt update
sudo apt -y install bat
