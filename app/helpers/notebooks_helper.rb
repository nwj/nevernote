module NotebooksHelper
  def reset_default_notebook!(user)
    user.update_attributes(notebook_id: user.notebooks.first.id)
  end

  def change_default_notebook!(user, notebook)
    user.update_attributes(notebook_id: notebook.id)
  end

  def time_since_last_update(note)
    time_string = "#{time_ago_in_words(note.updated_at)} ago"
  end

  def generate_snippet(note)
    return "" if note.content.nil?

    words = note.content.split(' ')
    snippet = String.new

    until snippet.length > 200 || words.empty?
      snippet += "#{words.shift} "
    end

    snippet
  end
end
