class Tagging < ActiveRecord::Base
  attr_accessible :note_id, :tag_id

  validates :note_id, :tag_id, presence: true
  validates :note_id, uniqueness: { scope: :tag_id }

  belongs_to(
    :note,
    class_name: "Note",
    foreign_key: :note_id,
    primary_key: :id
  )

  belongs_to(
    :tag,
    class_name: "Tag",
    foreign_key: :tag_id,
    primary_key: :id
  )

  has_one(
    :owner, 
    through: :note, 
    source: :owner
  )
end
