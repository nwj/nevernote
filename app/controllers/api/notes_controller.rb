class Api::NotesController < ApplicationController
  include NotesHelper

  before_filter(except: [:index, :create]) { |c| c.require_ownership("Note") }

  def index
    @notes = current_user.notes.order('updated_at DESC')
    render :index
  end

  def show
    @note = Note.find(params[:id])
    @notebooks = current_user.notebooks.order(:name)
    @taggings = @note.taggings
    render :show
  end

  def create
    @notebook = Notebook.find(params[:notebook_id]) if params[:notebook_id]
    @notebooks = current_user.notebooks.order(:name)

    if @notebook && @notebook.owner == current_user
      @note = Note.create(notebook_id: @notebook.id)
      render :show
    else
      @note = Note.create(notebook_id: current_user.default_notebook.id)
      render :show
    end
  end

  def update
    @note = Note.find(params[:id])
    @notebooks = current_user.notebooks.order(:name)
    @taggings = @note.taggings

    if @note.update_attributes(params[:note])
      render :show
    else
      render json: @note.errors.full_messages
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @notebooks = current_user.notebooks.order(:name)
    @taggings = @note.taggings

    @note.destroy

    render json: "Deleted the note '#{@note.title}'."
  end

end
