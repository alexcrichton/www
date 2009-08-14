require 'rubygems'
require 'sinatra'

set :environment, :production

disable :run, :reload

require 'wilson'
run Sinatra::Application
