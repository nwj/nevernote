# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
FactoryGirl.create(
  :user_with_everything, 
  username: 'nwj', 
  email: 'nwj@test.com'
)
Tagging.create(note_id: Note.first.id, tag_id: Tag.first.id)
Tagging.create(note_id: Note.last.id, tag_id: Tag.last.id)
User.first.update_attributes(notebook_id: Notebook.first.id)
