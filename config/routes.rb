Nevernote::Application.routes.draw do
  # Plain rails routes. For testing purposes only.
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
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

  # Interior and exterior roots
  resource :home, only: [:show]
  root to: "landing#show"
end
