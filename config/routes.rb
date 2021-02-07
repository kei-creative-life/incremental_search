Rails.application.routes.draw do
  namespace :posts do
    resources :searches, only: :index, defaults: { format: :json }
  end
  resources :posts
end
