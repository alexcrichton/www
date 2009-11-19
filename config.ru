require 'rubygems'
require 'sinatra'

set :environment, :development

disable :run, :reload

require 'alex'
run Sinatra::Application
