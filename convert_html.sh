#!/bin/bash


cwd=`pwd`
dir=site

rm -r $cwd/$dir
mkdir -p $cwd/$dir/images
mkdir $cwd/$dir/jars
mkdir $cwd/$dir/stylesheets
#mkdir $cwd/$dir/javascripts

cp -r $cwd/league $cwd/$dir
cp -r $cwd/public/stylesheets/* $cwd/$dir/stylesheets
cp -r $cwd/public/jars/* $cwd/$dir/jars
sed -i -r "s|/images|../images|" $cwd/$dir/stylesheets/style.css
cp -r $cwd/public/images/* $cwd/$dir/images
#cp -r $cwd/public/javascripts/prototype.js $cwd/$dir/javascripts

_get(){
	curl localhost:3000/$1 > $1
	sed -i -r "s|href=\"/|href=\"$2|" $1
	sed -i -r "s|src=\"/|src=\"$2|" $1
}

cd $cwd/$dir
_get index.html
_get java.html
_get ruby.html
_get testing.html

#zip -r $cwd/$dir.zip $cwd/$dir/
