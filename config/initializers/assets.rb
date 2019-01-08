# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add vendor paths
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets')

# Precompile core javascripts
Rails.application.config.assets.precompile += ['javascripts/*.js']


Rails.application.config.assets.precompile += Dir[Rails.root.join('app', 'assets', 'javascripts', '*.js')].map {
  |file| file.sub(%r(#{Rails.root.join('app', 'assets', 'javascripts/')}), '')
}
Rails.application.config.assets.precompile += Dir[Rails.root.join('app', 'assets', 'stylesheets', '*.css')].map {
  |file| file.sub(%r(#{Rails.root.join('app', 'assets', 'stylesheets/')}), '')
}

# Precompile core stylesheets
# Rails.application.config.assets.precompile += [
#   'stylesheets/styles.css',
# ]
Rails.application.config.assets.precompile += %w( styles.css )
Rails.application.config.assets.precompile += %w( bootstrap.css )
Rails.application.config.assets.precompile += %w( drift.css )
Rails.application.config.assets.precompile += %w( flag-icon-css/css/flag-icon.min.css )
Rails.application.config.assets.precompile += %w( gaxon-icon/styles )
Rails.application.config.assets.precompile += %w( perfect-scrollbar/css/perfect-scrollbar )

Rails.application.config.assets.precompile += %w( chart.js/dist/Chart.min.js )
Rails.application.config.assets.precompile += %w( ammap3/ammap/ammap.js )
Rails.application.config.assets.precompile += %w( ammap3/ammap/maps/js/continentsLow.js )
Rails.application.config.assets.precompile += %w( ammap3/ammap/themes/light.js )
Rails.application.config.assets.precompile += %w( amcharts3/amcharts/amcharts.js )
Rails.application.config.assets.precompile += %w( amcharts3/amcharts/gauge.js )
Rails.application.config.assets.precompile += %w( charts/dashboard-default.js )
Rails.application.config.assets.precompile += %w( charts/dashboard-crypto.js )
Rails.application.config.assets.precompile += %w( script.js )
Rails.application.config.assets.precompile += %w( perfect-scrollbar/dist/perfect-scrollbar.js )


# Precompile fonts
Rails.application.config.assets.precompile += ['fonts/*']

# Precompile libs
lib_files = Dir[Rails.root.join('vendor', 'assets', 'libs', '**', '[^_]*.*')]
lib_files.map! { |file| file.sub(%r(#{Rails.root.join('vendor', 'assets/')}), '') }
lib_files.map! { |file| file.sub(%r(\.(scss)), '.css') }
Rails.application.config.assets.precompile += lib_files

# Precompile pages
# Rails.application.config.assets.precompile += ['stylesheets/pages/*.css']

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
