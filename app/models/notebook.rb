class Notebook < ActiveRecord::Base
  attr_accessible :name, :user_id

  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id }
end
