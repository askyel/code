#!/bin/bash

# store the current dir
CUR_DIR=$(pwd)

# Let the person running the script know what's going on.
echo "Updating git repositories."

for i in ~/dotfiles\
	 ~/Documents/Stuyvesant/12/SoftDev/classcode\
	 ~/Documents/Stuyvesant/12/SoftDev/submissions\
     ~/Documents/Stuyvesant/12/Systems/hw/*\
	; do
    echo "";
    echo "$i";

    # We have to go to the .git parent directory to call the pull command
    cd "$i";
    #cd ..;

    # finally pull
    git pull origin master;

    # lets get back to the CUR_DIR
    cd $CUR_DIR
done

printf "\n...done\n"
