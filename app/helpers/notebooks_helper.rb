module NotebooksHelper
  def reset_default_notebook!(user)
    user.update_attributes(notebook_id: user.notebooks.first.id)
  end

  def change_default_notebook!(user, notebook)
    user.update_attributes(notebook_id: notebook.id)
  end

  def time_since_last_update(note)
    time = note.updated_at

    if time > 2.seconds.ago
      "1 second ago"
    elsif time > 1.minute.ago
      "#{(Time.now - time).to_i} seconds ago"
    elsif time > 2.minutes.ago
      "1 minute ago"
    elsif time > 1.hour.ago
      "#{((Time.now - time) / 60).to_i} minutes ago"
    elsif time > 1.days.ago
      "#{time_ago_in_words(time)[6..-1]} ago"
    elsif time > 2.days.ago
      "Yesterday"
    elsif time > 1.week.ago
      "#{time_ago_in_words(time)} ago"
    else
      time.to_date.to_s
    end
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
