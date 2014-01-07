object @notebook
attributes :id, :name
child(@notes) do
  attributes :id, :title, :content, :url, :notebook_id
  node :updated_at do |n|
    time_since_last_update(n)
  end
end
