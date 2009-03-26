#!/bin/bash


cwd=`pwd`
dir=site

rm -r $cwd/$dir
mkdir -p $cwd/$dir/images
mkdir $cwd/$dir/jars
mkdir $cwd/$dir/stylesheets
mkdir $cwd/$dir/javascripts

cp -r $cwd/league $cwd/$dir
cp $cwd/public/favicon.ico $cwd/$dir
cp -r $cwd/public/stylesheets/* $cwd/$dir/stylesheets
sed -i -r "s|/images|../images|" $cwd/$dir/stylesheets/*.css
cp -r $cwd/public/jars/* $cwd/$dir/jars
cp -r $cwd/public/images/*.png $cwd/$dir/images
cp -r $cwd/public/javascripts/jquery.js $cwd/$dir/javascripts
cp -r $cwd/public/javascripts/menubar.js $cwd/$dir/javascripts
#cp -r $cwd/public/javascripts/application.js $cwd/$dir/javascripts

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
_get webweb.html

#zip -r $cwd/$dir.zip $cwd/$dir/
