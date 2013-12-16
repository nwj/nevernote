Nevernote::Application.routes.draw do
  # Temporary non-api routes. For testing purposes only.
  resources :notebooks do
    get 'rename', on: :member
  end
  resources :tags
  resources :notes, except: [:new] do
    resources :taggings, only: [:create, :destroy]
  end

  # API routes. Backbone plugs in here.
  namespace 'api', defaults: {format: :json} do
    resources :notebooks, except: [:new, :edit]
    resources :tags, except: [:new, :edit]
    resources :notes, except: [:new, :edit] do
      resources :taggings, only: [:create, :destroy]
    end
  end

  # Non-API, non-Backbone routes.
  resource :home, only: [:show]
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root to: "landing#show"
end
