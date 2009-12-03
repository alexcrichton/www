load 'deploy' if respond_to?(:namespace) # cap2 differentiator
Dir['vendor/plugins/*/recipes/*.rb'].each { |plugin| load(plugin) }

require 'erb'

set :application, "alexcrichton.com"

set :scm, :git
set :repository,  "git://me.alexcrichton.com/alex_web.git"
set :branch, "master"
set :deploy_via, :remote_cache

set :user, "alex"
set :use_sudo, false

# If you aren't deploying to /u/apps/#{application} on the target
# servers (which is the default), you can specify the actual location
# via the :deploy_to variable:
set :deploy_to, "/srv/www/#{application}"

after "deploy:update_code", "deploy:create_tmp_dir"

namespace :deploy do
  task :create_tmp_dir do
    run "mkdir -p #{release_path}/tmp"
  end

  task :finalize_update do
  end
  task :migrate do
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

set :web_server, "alexcrichton.com"
ssh_options[:port] = 443
set :keep_releases, 1

role :web, web_server


