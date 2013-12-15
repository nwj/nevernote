class Api::NotesController < ApplicationController

  before_filter(except: [:index, :create]) { |c| c.require_ownership("Note") }

  def index
    @notes = current_user.notes.order('updated_at DESC')
    render :index
  end

end
