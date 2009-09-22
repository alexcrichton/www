require 'rake'
SINATRA_ROOT = File.dirname(__FILE__)
require File.join(File.dirname(__FILE__), 'compress', 'asset_package')
puts File.join(File.dirname(__FILE__), 'compress', 'asset_package')

namespace :compress do
  desc 'Compress all javascripts and stylesheets'
  task :all => :prepare do
    Synthesis::AssetPackage.build_all
  end

  desc 'Prepare for things...'
  task :prepare do
    Dir.mkdir File.dirname(__FILE__) + "/tmp" unless File.exists?(File.dirname(__FILE__) + "/tmp")
  end
end
