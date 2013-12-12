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
end
