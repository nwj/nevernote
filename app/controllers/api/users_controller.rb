class Api::UsersController < ApplicationController
  def show
    @user = current_user
    render :show
  end

  def update
    @user = current_user

    if @user.update_attributes(params[:user])
      render :show
    else
      render json: @user.errors.full_messages
    end
  end
end
