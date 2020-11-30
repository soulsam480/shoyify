#!/usr/bin/env bash

# abort on errors
set -e

# build
vuepress build docs/src

# navigate into the build output directory
cd docs/src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:soulsam480/shoyify.git master:gh-pages

cd -