class Api::TaggingsController < ApplicationController

  before_filter { |c| c.require_ownership("Note", params[:note_id]) }

  def index
    note = Note.find(params[:note_id])
    @taggings = note.taggings

    render :index
  end

  def create
    @note = Note.find(params[:note_id])

    @tag = Tag.find_or_create_by_name_and_user_id(
      params[:tag_name],
      current_user.id
    )

    @tagging = Tagging.create(note_id: @note.id, tag_id: @tag.id)

    if @tagging.save
      render :index
    else
      render json: @tagging.errors.full_messages
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])

    @tagging.destroy

    render json: "Note untagged."
  end
end
