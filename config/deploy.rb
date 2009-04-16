require 'erb'

set :application, "alex.academycommunity.com"

set :scm, :git
set :repository,  "git://github.com/alexcrichton/alex_web.git"
set :branch, "live"
set :deploy_via, :remote_cache

set :user, "alex"
set :use_sudo, false

# If you aren't deploying to /u/apps/#{application} on the target
# servers (which is the default), you can specify the actual location
# via the :deploy_to variable:
set :deploy_to, "/srv/www/#{application}"

namespace :deploy do
  task :finalize_update do
  end
  task :restart do
  end
  task :start do
  end
  task :stop do
  end
end
set :web_server, "academycommunity.com"
set :keep_releases, 2

role :web, web_server

