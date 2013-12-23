collection @notebooks
attributes :id, :name
node :note_count do |n|
  n.notes.count
end
node :default do |n|
  current_user.default_notebook == n
end
