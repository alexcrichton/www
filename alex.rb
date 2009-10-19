require 'rubygems'
gem 'sinatra'
gem 'haml'
require 'sinatra'
require 'haml'

get '/' do
  haml :index
end

get '/index.html' do
  haml :index
end
