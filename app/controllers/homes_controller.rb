class HomesController < ApplicationController
  def show
    @notebooks_json = Rabl.render(
      current_user.notebooks.order('name'),
      'index',
      view_path: 'app/views/api/notebooks',
      format: :json
    )

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
