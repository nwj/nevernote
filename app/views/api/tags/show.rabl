object @tag
attributes :id, :name
child(@notes) do
  attributes :id, :title, :content, :url, :notebook_id, :updated_at
end
