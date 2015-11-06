#!/bin/bash

echo "Pushing current git repository."

echo "";
git add *;
git commit -m "updating from Air"
git push;

echo "";
echo "...done"
