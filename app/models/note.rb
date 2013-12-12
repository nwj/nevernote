class Note < ActiveRecord::Base
  attr_accessible :title, :content, :url, :notebook_id

  validates :notebook_id, presence: true

  belongs_to(
    :notebook,
    class_name: "Notebook",
    foreign_key: :notebook_id,
    primary_key: :id
  )

  has_one :author, through: :notebook, source: :author
end
