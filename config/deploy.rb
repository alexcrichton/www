server "eve.alexcrichton.com", :web, :primary => true

set :scm, :git
set :repository,  "git://eve.alexcrichton.com/alex_web.git"
set :branch, "master"
set :deploy_via, :remote_cache

set :user, "capistrano"
set :use_sudo, false

set :deploy_to, "/srv/http/alexcrichton.com"

after "deploy:update_code", "db:symlink"

namespace :db do
  task :default do
    run "mkdir -p #{shared_path}/tmp"
    run "ln -nsf #{shared_path}/pids #{shared_path}/tmp"
  end
  
  task :symlink do
    run "rm -rf #{current_release}/tmp"
    run "ln -nsf #{shared_path}/tmp #{current_release}/tmp"
  end
end

namespace :deploy do
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

set :keep_releases, 1
