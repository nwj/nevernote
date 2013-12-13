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

end
