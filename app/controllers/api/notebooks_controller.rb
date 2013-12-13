class Api::NotebooksController < ApplicationController
  include NotebooksHelper

  before_filter(except: [:index, :create]) { |c| c.require_ownership("Notebook") }

  def index
    @notebooks = current_user.notebooks.order('name')
    render :index
  end

  def show
    @notebook = Notebook.find(params[:id])
    @notes = @notebook.notes.order('updated_at DESC')
    render :show
  end

  def create
    @notebook = Notebook.new(params[:notebook])
    @notebook.user_id = current_user.id

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages
    end
  end

  def update
    @notebook = Notebook.find(params[:id])
    @notes = @notebook.notes.order('updated_at DESC')

    if @notebook.update_attributes(params[:notebook])
      if params[:new_default_notebook]
        change_default_notebook!(current_user, @notebook)
      end

      render :show
    else
      render json: @notebook.errors.full_messages
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])

    # Don't allow deletion if user has only one notebook
    if current_user.notebooks.count > 1
      @notebook.destroy

      # Check if deleted notebook was the user's default notebook
      if current_user.notebook_id == @notebook.id
        reset_default_notebook!(current_user)
      end

      render :show
    else
      render json: "Must have at least one notebook at all times"
    end
  end

end
