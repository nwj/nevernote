class NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def new
    @notebook = Notebook.new
    render :new
  end

  def create
    notebook = Notebook.new(params[:notebook])
    notebook.user_id = current_user.id

    if notebook.save
      redirect_to notebooks_url
    else
      render json: notebook.errors.full_messages
    end
  end

  def edit
    @notebook = Notebook.find(params[:id])
    render :edit
  end

  def update
    notebook = Notebook.find(params[:id])

    if notebook.update_attributes(params[:notebook])
      redirect_to notebooks_url
    else
      render json: notebook.errors.full_messages
    end
  end

end
