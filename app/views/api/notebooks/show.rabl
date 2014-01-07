object @notebook
attributes :id, :name
child(@notes) do
  attributes :id, :title, :content
  node :updated_at do |n|
    time_since_last_update(n)
  end
end
