Nevernote::Application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :notebooks
  resources :notes

  root to: "landing#show"
end
