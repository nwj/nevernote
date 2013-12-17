class HomesController < ApplicationController
  def show
    notebooks = current_user.notebooks.order('name')
    @notebooks_json = Rabl.render(
      notebooks,
      'index',
      view_path: 'app/views/api/notebooks',
      format: :json
    )

    tags = current_user.tags.order('name')
    @tags_json = Rabl.render(
      tags,
      'index',
      view_path: 'app/views/api/tags',
      format: :json
    )

    render :show
  end
end
