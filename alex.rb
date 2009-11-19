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
  if params[:a] =~ /twilight/i
    erb :surprise
  elsif params[:a] =~ /nhd/i
    erb :surprise3
  elsif params[:a] == 'Parking Lot'
    haml :surprise2
  else
    "Sorry, try again!"
  end
end
