class TagsController < ApplicationController

  before_filter(except: [:index,:new, :create]) { |c| c.require_ownership("Tag") }

  def index
    @tags = current_user.tags.order('name')
    render :index
  end

  def show
    @tag = Tag.find(params[:id])
    @notes = @tag.notes.order('updated_at DESC')
  end

  def new
    @tag = Tag.new()
    render :new
  end

  def create
    tag = Tag.new(params[:tag])
    tag.user_id = current_user.id

    if tag.save
      redirect_to tags_url
    else
      render json: tag.errors.full_messages
    end
  end

  def edit
    @tag = Tag.find(params[:id])
    render :edit
  end

  def update
    tag = Tag.find(params[:id])

    if tag.update_attributes(params[:tag])
      redirect_to tags_url
    else
      render json: tag.errors.full_messages
    end
  end

  def destroy
    tag = Tag.find(params[:id])
    tag.destroy
    redirect_to tags_url
  end
end
