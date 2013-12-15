collection @notes
attributes :id, :title
node :last_updated do |n|
  time_since_last_update(n)
end
node :snippet do |n|
  generate_snippet(n)
end
