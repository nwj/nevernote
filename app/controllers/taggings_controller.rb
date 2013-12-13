class TaggingsController < ApplicationController

  before_filter { |c| c.require_ownership("Note", params[:note_id]) }
  before_filter(except: [:create]) { |c| c.require_ownership("Tagging") }

  def create
    note = Note.find(params[:note_id])

    tag = Tag.find_or_create_by_name_and_user_id(
      params[:tag_name],
      current_user.id
    )

    tagging = Tagging.create(note_id: note.id, tag_id: tag.id)

    if tagging.save
      redirect_to note_url(note)
    else
      render json: tagging.errors.full_messages
    end
  end

  def destroy
    note = Note.find(params[:note_id])
    tagging = Tagging.find(params[:id])

    tagging.destroy

    redirect_to note_url(note)
  end
end
