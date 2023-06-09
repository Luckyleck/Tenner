Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  
  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    get 'gigs/search', to: "gigs#search"
    resources :gigs, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :reviews, only: [:index, :create, :show, :update, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
 