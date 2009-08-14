require 'rubygems'
gem 'sinatra'
require 'sinatra'
require 'erb'

get '/' do
  erb :index
end

get '/index.html' do
  erb :index
end
