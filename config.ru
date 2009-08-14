require 'rubygems'
require 'sinatra'

set :environment, :production

disable :run, :reload

require 'alex'
run Sinatra::Application
