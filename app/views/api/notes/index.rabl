collection @notes
attributes :id, :title, :content
node :updated_at do |n|
 time_since_last_update(n)
end
