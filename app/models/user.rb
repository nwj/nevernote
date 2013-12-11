class User < ActiveRecord::Base
  attr_accessible :email, :username, :password

  validates :email, :username, :session_token, presence: true
  validates :password, length: { within: 6..64, allow_nil: true }
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :email, email: true
  validates :username, username: true
end
