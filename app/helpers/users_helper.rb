module UsersHelper

  def create_first_notebook!(user)
    notebook_name = "#{user.username}'s notebook"
    notebook = Notebook.create(name: notebook_name, user_id: user.id)
    user.update_attributes(notebook_id: notebook.id)
  end
end
