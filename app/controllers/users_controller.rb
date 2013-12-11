class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.new(params[:user])

    if user.save
      login!(user)
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages
    end
  end

  # TEMPORARY - Final app will not have a users/show route
  def show
    render :show
  end

end
