class NotebooksController < ApplicationController
  include NotebooksHelper

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

  def destroy
    notebook = Notebook.find(params[:id])

    # Don't allow deletion if user has only one notebook
    if current_user.notebooks.count > 1
      notebook.destroy

      # Check if deleted notebook was the user's default notebook
      if current_user.notebook_id == notebook.id
        new_default_notebook!(current_user)
      end

      redirect_to notebooks_url
    else
      render json: "Must have at least one notebook at all times"
    end
  end

end
