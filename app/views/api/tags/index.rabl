collection @tags
attributes :id, :name
node :note_count do |t|
  t.notes.count
end
