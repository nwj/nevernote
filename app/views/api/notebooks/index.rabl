collection @notebooks
attributes :id, :name
node :note_count do |n|
  n.notes.count
end
