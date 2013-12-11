class SessionsController < ApplicationController

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
      redirect_to user_url(user)
    end
  end

  def destroy
    logout!(current_user)
    redirect_to root_url
  end

end
