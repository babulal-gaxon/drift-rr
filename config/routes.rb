Rails.application.routes.draw do
  # Dashboard routes
  get 'dashboards/dashboard-1', to: 'dashboards#dashboard_1', as: :dashboards_dashboard_1
  get 'dashboards/dashboard-2', to: 'dashboards#dashboard_2', as: :dashboards_dashboard_2
  get 'dashboards/dashboard-3', to: 'dashboards#dashboard_3', as: :dashboards_dashboard_3
  get 'dashboards/dashboard-4', to: 'dashboards#dashboard_4', as: :dashboards_dashboard_4

  # Widget routes
  get 'widgets', to: 'widgets#widget', as: :widgets

  # Metrices routes
  get 'metrices', to: 'metrices#metrices', as: :metrices

  # Layouts routes
  get 'layouts', to: 'widgets#layouts', as: :layouts

  # Preapps routes
  get 'task-manager', to: 'preapps#taskmanager', as: :taskmanager
  get 'task-manager-inner', to: 'preapps#taskmanager_inner', as: :taskmanager_inner
  get 'mail', to: 'preapps#mail', as: :mail
  get 'mail-detail', to: 'preapps#mail_detail', as: :mail_detail
  get 'contacts', to: 'preapps#contactus', as: :contacts
  get 'chat', to: 'preapps#chat', as: :chat
  get 'chat-start', to: 'preapps#chat_start', as: :chat_start

  # Pages routes
  get 'pages/wall', to: 'pages#wall', as: :pages_wall
  get 'pages/profile', to: 'pages#profile', as: :pages_profile
  get 'pages/login', to: 'pages#login', as: :pages_login
  get 'pages/signup', to: 'pages#signup', as: :pages_signup
  get 'pages/forgot_password', to: 'pages#forgot_password', as: :pages_forgot_password
  get 'pages/lock_screen', to: 'pages#lock_screen', as: :pages_lock_screen
  get 'pages/blank', to: 'pages#blank', as: :pages_blank
  get 'pages/search', to: 'pages#search', as: :pages_search
  get 'pages/error_404', to: 'pages#error_404', as: :pages_error_404
  get 'pages/error_500', to: 'pages#error_500', as: :pages_error_500

  # Data Vilualization routes
  get 'chartjs', to: 'vilualization#chartjs', as: :chartjs
  get 'am_charts', to: 'vilualization#am_charts', as: :am_charts
  get 'map/simple', to: 'vilualization#simple_map', as: :simple_map
  get 'map/events', to: 'vilualization#events_map', as: :events_map
  get 'map/markers', to: 'vilualization#markers_map', as: :markers_map
  get 'map/geo_location', to: 'vilualization#geo_location_map', as: :geo_location_map
  get 'map/geo_coding', to: 'vilualization#geo_coding_map', as: :geo_coding_map
  get 'map/data', to: 'vilualization#data_maps', as: :data_maps
  get 'map/am', to: 'vilualization#am_maps', as: :am_maps
  get 'overlay', to: 'vilualization#overlay', as: :overlay
  get 'overlay/polylines', to: 'vilualization#overlay_polylines', as: :overlay_polylines
  get 'overlay/overlay', to: 'vilualization#overlay_polylgons', as: :overlay_polylgons
  get 'geo_json_polylines', to: 'vilualization#geo_json_polylines', as: :geo_json_polylines
  get 'routes/map', to: 'vilualization#map_routes', as: :map_routes
  get 'routes/advance', to: 'vilualization#advance_routes', as: :advance_routes

  # Baisc Components routes
  get 'components/alerts', to: 'components#alerts', as: :components_alerts
  get 'components/badges', to: 'components#badges', as: :components_badges
  get 'components/breadcrumbs', to: 'components#breadcrumbs', as: :components_breadcrumbs
  get 'components/button', to: 'components#button', as: :components_button
  get 'components/button_group', to: 'components#button_group', as: :components_button_group
  get 'components/card', to: 'components#card', as: :components_card
  get 'components/card_group', to: 'components#card_group', as: :components_card_group
  get 'components/carousel', to: 'components#carousel', as: :components_carousel
  get 'components/collapse', to: 'components#collapse', as: :components_collapse
  get 'components/dropdown', to: 'components#dropdown', as: :components_dropdown
  get 'components/input_group', to: 'components#input_group', as: :components_input_group
  get 'components/jumbotron', to: 'components#jumbotron', as: :components_jumbotron
  get 'components/list_group', to: 'components#list_group', as: :components_list_group
  get 'components/modal', to: 'components#modal', as: :components_modal
  get 'components/navbar', to: 'components#navbar', as: :components_navbar
  get 'components/navstabs', to: 'components#navstabs', as: :components_navstabs
  get 'components/pagination', to: 'components#pagination', as: :components_pagination
  get 'components/popovers', to: 'components#popovers', as: :components_popovers
  get 'components/progress_bar', to: 'components#progress_bar', as: :components_progress_bar
  get 'components/scrollspy', to: 'components#scrollspy', as: :components_scrollspy
  get 'components/tooltip', to: 'components#tooltip', as: :components_tooltip
  get 'components/typography', to: 'components#typography', as: :components_typography


  # Extra Components routes
  get 'extracomponents/summernote_editor', to: 'extracomponents#summernote_editor', as: :extracomponents_summernote_editor
  get 'extracomponents/code_editor', to: 'extracomponents#code_editor', as: :extracomponents_code_editor
  get 'extracomponents/date_time_picker', to: 'extracomponents#date_time_picker', as: :extracomponents_date_time_picker
  get 'extracomponents/color_picker', to: 'extracomponents#color_picker', as: :extracomponents_color_picker
  get 'extracomponents/sweet_alerts', to: 'extracomponents#sweet_alerts', as: :extracomponents_sweet_alerts
  get 'extracomponents/notifications', to: 'extracomponents#notifications', as: :extracomponents_notifications
  get 'extracomponents/drag_drop', to: 'extracomponents#drag_drop', as: :extracomponents_drag_drop

  # Forms routes
  get 'forms/basic', to: 'forms#basic_form', as: :basic_form
  get 'forms/file-upload', to: 'forms#file_upload', as: :file_upload

  # Tables routes
  get 'tables/basic', to: 'tables#basic', as: :tables_basic
  get 'tables/data', to: 'tables#data', as: :tables_data

  # Extra views routes
  get 'grid/basic', to: 'extraviews#basic_grid', as: :basic_grid
  get 'grid/advanced', to: 'extraviews#advanced_grid', as: :advanced_grid
  get 'list/basic', to: 'extraviews#basic_list', as: :basic_list
  get 'list/advanced', to: 'extraviews#advanced_list', as: :advanced_list


  root to: 'dashboards#dashboard_1'
end
