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
  get 'task-manager', to: 'preapps#taskmanager', as: :taskmanager
  get 'mail', to: 'preapps#mail', as: :mail
  get 'contacts', to: 'preapps#contacts', as: :contacts
  get 'chat', to: 'preapps#chat', as: :chat

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


  root to: 'dashboards#dashboard_1'
end
