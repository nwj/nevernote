module SessionsHelper
  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logout!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def require_logged_in
    redirect_to new_session_url if current_user.nil?
  end

  def require_logged_out
    redirect_to notebooks_url unless current_user.nil?
  end

  def require_notebook_ownership
    notebook = Notebook.find(params[:id])
    redirect_to notebooks_url unless notebook.author == current_user
  end
end
