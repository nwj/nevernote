class NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
    render :index
  end

end
