class Api::NotesController < ApplicationController

  before_filter(except: [:index, :create]) { |c| c.require_ownership("Note") }

  def index
    @notes = current_user.notes.order('updated_at DESC')
    render :index
  end

  def show
    @note = Note.find(params[:id])
    @notebooks = current_user.notebooks
    @taggings = @note.taggings
    render :show
  end

end
