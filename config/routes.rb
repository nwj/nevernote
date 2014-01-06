Nevernote::Application.routes.draw do
  # API routes. Backbone plugs in here.
  namespace 'api', defaults: {format: :json} do
    resource :user, only: [:show, :update]
    resources :notebooks, except: [:new, :edit]
    resources :tags, except: [:new, :edit]
    resources :notes, except: [:new, :edit] do
      resources :taggings, only: [:create, :destroy]
    end
  end

  # Non-API, non-Backbone routes.
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :home, only: [:show]
  resource :about, only: [:show]

  root to: "landing#show"
end
