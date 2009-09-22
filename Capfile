load 'deploy' if respond_to?(:namespace) # cap2 differentiator
Dir['vendor/plugins/*/recipes/*.rb'].each { |plugin| load(plugin) }

require 'erb'

set :application, "alexcrichton.com"

set :scm, :git
set :repository,  "git://github.com/alexcrichton/alex_web.git"
set :branch, "master"
set :deploy_via, :remote_cache

set :user, "alex"
set :use_sudo, false

# If you aren't deploying to /u/apps/#{application} on the target
# servers (which is the default), you can specify the actual location
# via the :deploy_to variable:
set :deploy_to, "/srv/http/#{application}"

after "deploy:update_code", "deploy:create_assets"

namespace :deploy do
  desc "Create asset packages for production"
  task :create_assets do
    run <<-EOF
     cd #{release_path} && rake compress:all
    EOF
  end

  task :finalize_update do
  end
  task :restart do
    run "touch #{current_release}/tmp/restart.txt"
  end
  task :start do
    run "touch #{current_release}/tmp/restart.txt"
  end
  task :stop do
    # Do nothing, don't want to kill nginx
  end
end

set :web_server, "localhost"
set :keep_releases, 2

role :web, web_server


