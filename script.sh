#!/bin/bash
emptys=""
cd /home/linux/backend
git fetch
git_status="$(git diff origin/master)"
if [ "$git_status" != "$emptys" ]; then
        git pull origin master | ts '[%Y-%m-%d %H:%M:%S]'>> /home/linux/backend/out.log
fi
