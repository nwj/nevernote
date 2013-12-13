Nevernote::Application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :notebooks do
    member do
      get 'rename'
    end
  end

  resources :notes, except: [:new]

  resources :tags

  resources :taggings, only: [:create, :destroy]

  resource :home, only: [:show]

  root to: "landing#show"
end
