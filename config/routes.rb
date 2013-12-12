Nevernote::Application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :notebooks, except: [:show] do
    member do
      get 'rename'
    end
  end

  resources :notes, except: [:new, :edit]

  root to: "landing#show"
end
