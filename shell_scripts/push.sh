#!/bin/bash

CUR_DIR=$(pwd)

echo "Pushing to git repositories."

for i in ~/dotfiles\
	 ~/code\
	 ~/stuyhs\
	 ; do
	echo "";
	echo "$i";
	cd "$i";
	git add *;
	git commit -m "updating from Air"
	git push;
	cd $CUR_DIR
done

echo "";
echo "...done"
