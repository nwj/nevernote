class NotesController < ApplicationController

  def index
    @notes = current_user.notes
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    notebook = Notebook.find(params[:notebook_id]) if params[:notebook_id]

    if notebook && notebook.author == current_user
      Note.create(notebook_id: notebook.id)
      redirect_to notebook_url(notebook)
    else
      Note.create(notebook_id: current_user.default_notebook.id)
      redirect_to notes_url
    end
  end

  def edit
    @note = Note.find(params[:id])
    render :edit
  end

  def update
    note = Note.find(params[:id])

    if note.update_attributes(params[:note])
      redirect_to note_url(note)
    else
      render json: note.errors.full_messages
    end
  end

end
