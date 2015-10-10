#!/bin/bash

CUR_DIR=$(pwd)

echo "Pushing to git repositories."

for i in ~/dotfiles\
	 ~/code\
	 ; do
	echo "$i";
	cd "$i";
	git add *;
	git commit -m "updating from Air"
	git push;
	cd $CUR_DIR
done

prinf "\n...done\n"
