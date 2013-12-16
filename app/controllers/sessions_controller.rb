class SessionsController < ApplicationController

  skip_before_filter :require_logged_in,  only: [:new, :create]
  before_filter :require_logged_out, only: [:new, :create]

  def new
    render :new
  end

  def create
    email_or_username = params[:email_or_username ]
    password = params[:password]
    user = User.find_by_credentials(email_or_username , password)

    if user.nil?
      render json: "Incorrect username and/or password."
    else
      login!(user)
      redirect_to home_url
    end
  end

  def destroy
    logout!(current_user)
    redirect_to root_url
  end

end
