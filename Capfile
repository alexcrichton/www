load 'deploy' if respond_to?(:namespace) # cap2 differentiator
Dir['vendor/plugins/*/recipes/*.rb'].each { |plugin| load(plugin) }

require 'erb'

set :application, "alexcrichton.com"

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

after 'deploy:update_code', 'deploy:symlink_league'

name

namespace :deploy do
  task :symlink_league do
    run "ln -sf #{deploy_to}/league-site #{release_path}/league"
  end
  task :finalize_update do
  end
  task :restart do
  end
  task :start do
  end
  task :stop do
  end
end
namespace :db do
end
set :web_server, "academycommunity.com"
set :keep_releases, 2

role :web, web_server


