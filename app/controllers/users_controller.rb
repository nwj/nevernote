class UsersController < ApplicationController
  include UsersHelper

  skip_before_filter :require_logged_in,  only: [:new, :create]
  before_filter :require_logged_out, only: [:new, :create]

  def new
    render :new
  end

  def create
    user = User.new(params[:user])

    if user.save
      create_first_notebook!(user)
      login!(user)
      redirect_to notebooks_url
    else
      render json: user.errors.full_messages
    end
  end

end
