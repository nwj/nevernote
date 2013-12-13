class Notebook < ActiveRecord::Base
  attr_accessible :name, :user_id

  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :notes,
    class_name: "Note",
    foreign_key: :notebook_id,
    primary_key: :id,
    dependent: :destroy
  )

end
