#!/bin/bash
git status;
echo "";
echo "Commit Name:";
read name;
if  [ "$name" != "" ]; then
    git add --all :/;
    git commit -m "$name";
    exit 1;
else
    exit 0;
fi