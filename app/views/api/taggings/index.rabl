collection @taggings
attributes :id, :tag_id, :note_id
node :tag_name do |t|
  t.tag.name
end
