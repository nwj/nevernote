object @notebook
attributes :id, :name
child(@notes) do
  attributes :id, :title, :updated_at
  node :updated_ago do |n|
    "#{time_ago_in_words(n.updated_at)} ago"
  end
  node :snippet do |n|
    n.content[0..190] unless n.content.nil?
  end
end
