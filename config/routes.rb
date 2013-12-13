Nevernote::Application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :notebooks do
    member do
      get 'rename'
    end
  end

  resources :notes, except: [:new] do
    resources :taggings, only: [:create, :destroy]
  end

  resources :tags


  resource :home, only: [:show]

  root to: "landing#show"
end
