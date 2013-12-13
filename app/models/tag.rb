class Tag < ActiveRecord::Base
  attr_accessible :name, :user_id

  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )
end
