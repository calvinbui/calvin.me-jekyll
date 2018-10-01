#!/bin/bash
read -p "Incremental? [Y/n]: " incremental

if [ "$incremental"  == "" ] || [ "$incremental"  == "y" ] || [ "$incremental" == "Y" ]; then
  bundle exec jekyll serve --incremental --drafts --host 0.0.0.0
else
  bundle exec jekyll serve --drafts --host 0.0.0.0
fi
