collection @notes
attributes :id, :title, :content, :url, :notebook_id
node :updated_at do |n|
 time_since_last_update(n)
end
