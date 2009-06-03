#!/bin/bash


tmp=/tmp/alex-webstuff
cwd=`pwd`
rm -r $tmp || exit 1
mkdir -p $tmp/images || exit 1
mkdir $tmp/stylesheets
mkdir $tmp/javascripts

cp -r public/stylesheets/* $tmp/stylesheets
sed -i -r "s|/images|../images|" $tmp/stylesheets/*.css
cp -r public/javascripts/jquery.js $tmp/javascripts

_get(){
	curl localhost:3000/$1 > $1
	sed -i -r "s|href=\"/|href=\"$2|" $1
	sed -i -r "s|src=\"/|src=\"$2|" $1
}

cd $tmp

_get index.html

cd $cwd
echo -n "Checkout live branch? [Y/n]"
read response
if [ "$response" != "n" ]; then
  git checkout live || exit 1
 # find . | grep -v .git | xargs git rm -r
  cp -r $tmp/* .
  git add .
else
  exit 0
fi
echo -n "Commit changes? [Y/n]"
read response
if [ "$response" != "n" ]; then
  echo "Commit message?"
  read message
  git commit -am "$message"
  echo -n "Push changes? [Y/n] "
  read response
  [[ "$response" != "n" ]] &&	git push
fi
git checkout new 
echo -n "Update server [Y/n]"
read response
[[ "$response" != "n" ]] && cap deploy
