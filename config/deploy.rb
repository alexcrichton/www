require 'erb'
# http://github.com/jnewland/san_juan/tree/master For god integration
#require 'san_juan'

set :application, "alex.academycommunity.com"

set :scm, :git
set :repository,  "git://github.com/alexc605/alex_web.git"
set :branch, "live"
set :deploy_via, :remote_cache


set :user, "alex"
set :use_sudo, false

# If you aren't deploying to /u/apps/#{application} on the target
# servers (which is the default), you can specify the actual location
# via the :deploy_to variable:
set :deploy_to, "/srv/www/#{application}"

#before "deploy:setup", :db
#after "deploy:update_code", "db:symlink", "db:rake_db" 

#namespace :db do
#  desc "Make symlink for database yaml" 
#  task :symlink do
#    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
#  end
#
#  desc "Rake the databases"
#  task :rake_db do
#    run "rake -f #{release_path}/Rakefile db:migrate RAILS_ENV=production"
#  end
#end
#
#namespace :slicehost do
#desc "install required gems"
#  task :install_required_gems do
#    run "cd #{deploy_to}/current; rake gems:install"
#  end
#end
namespace :deply do
	[:setup, :update, :update_code, :finalize_update, :symlink, :restart].each do |dflt_task|
		task dflt_task do
		end
	end
end
set :web_server, "academycommunity.com"

#role :app, web_server
role :web, web_server
#role :db,  web_server, :primary => true

#thin_app = "thin-tix.academycommunity.com"

#san_juan.role :app, [thin_app]

#set :god_config_path, "/etc/god.conf"

#namespace :deploy do
#  desc "Use god to restart the app" 
#    task :restart do
#      god.app.send(thin_app).restart
#    end
#
#    desc "Use god to start the app" 
#    task :start do
#      god.app.send(thin_app).start
#    end
#
#    desc "Use god to stop the app" 
#    task :stop do
#      god.app.send(thin_app).stop
#    end
#end
