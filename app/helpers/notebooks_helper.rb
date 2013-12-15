module NotebooksHelper
  def reset_default_notebook!(user)
    user.update_attributes(notebook_id: user.notebooks.first.id)
  end

  def change_default_notebook!(user, notebook)
    user.update_attributes(notebook_id: notebook.id)
  end

end
