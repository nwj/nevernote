class Note < ActiveRecord::Base
  attr_accessible :title, :content, :url, :notebook_id

  validates :notebook_id, presence: true

  belongs_to(
    :notebook,
    class_name: "Notebook",
    foreign_key: :notebook_id,
    primary_key: :id
  )

  has_many(
    :taggings,
    class_name: "Tagging",
    foreign_key: :note_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :tags, 
    through: :taggings, 
    source: :tag
  )

  has_one(
    :owner,
    through: :notebook,
    source: :owner
  )
end
