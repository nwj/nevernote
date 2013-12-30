Nevernote::Application.routes.draw do
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
