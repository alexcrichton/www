require 'rubygems'
gem 'sinatra'
gem 'haml'
require 'sinatra'
require 'haml'
require 'erb'

get '/' do
  haml :index
end

get '/index.html' do
  haml :index
end

get '/surprise' do
  if params[:a] == 'alexdc'
    erb :surprise
  else
    'Sorry, try again!'
  end
end
