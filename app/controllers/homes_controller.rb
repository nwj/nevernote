class HomesController < ApplicationController
  def show
    @tags_json = Rabl.render(
      current_user.tags.order('name'),
      'index',
      view_path: 'app/views/api/tags',
      format: :json
    )

    @notes_json = Rabl.render(
      current_user.notes.order('updated_at DESC'),
      'index',
      view_path: 'app/views/api/notes',
      format: :json
    )

    render :show
  end
end
