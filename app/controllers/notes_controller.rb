class NotesController < ApplicationController

  def index
    notebook = Notebook.find(params[:notebook_id]) if params[:notebook_id]

    if notebook && notebook.author == current_user
      @notes = notebook.notes
      @title = notebook.name
    else
      @notes = current_user.notes
      @title = "All Notes"
    end

    render :index
  end

  def create
    notebook = Notebook.find(params[:notebook_id]) if params[:notebook_id]

    if notebook && notebook.author == current_user
      Note.create(notebook_id: notebook.id)
      redirect_to notes_url(notebook_id: notebook.id)
    else
      Note.create(notebook_id: current_user.default_notebook.id)
      redirect_to notes_url
    end

  end
end
