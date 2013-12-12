module NotebooksHelper
  def new_default_notebook!(user)
    user.update_attributes(notebook_id: user.notebooks.first.id)
  end
end
