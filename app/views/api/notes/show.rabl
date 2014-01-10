object @note
attributes :id, :title, :content, :url, :notebook_id
node :created_short do |n|
  n.created_at.strftime("%b %d, %Y")
end
node :created_long do |n|
  n.created_at.strftime("%A, %B %e %Y, %l:%M %p")
end
node :modified_short do |n|
  n.updated_at.strftime("%b %d, %Y")
end
node :modified_long do |n|
  n.updated_at.strftime("%A, %B %e %Y, %l:%M %p")
end
child(@notebooks) do
  attributes :id, :name
  node :parent do |n|
    @note.notebook == n
  end
end
child(@tags) do
  attributes :id, :name
end
