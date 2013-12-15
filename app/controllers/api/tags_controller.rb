class Api::TagsController < ApplicationController

  before_filter(except: [:index, :new, :create]) { |c| c.require_ownership("Tag") }

  def index
    @tags = current_user.tags.order('name')
    render :index
  end

  def show
    @tag = Tag.find(params[:id])
    @notes = @tag.notes.order('updated_at DESC')
    render :show
  end

  def create
    @tag = Tag.new(params[:tag])
    @tag.user_id = current_user.id
    @notes = @tag.notes.order('updated_at DESC')

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages
    end
  end

  def update
    @tag = Tag.find(params[:id])
    @notes = @tag.notes.order('updated_at DESC')

    if @tag.update_attributes(params[:tag])
      render :show
    else
      render json: @tag.errors.full_messages
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render json: "Permanently deleted 1 tag(s)."
  end

end
