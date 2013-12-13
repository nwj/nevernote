class User < ActiveRecord::Base
  attr_accessible :email, :username, :password, :notebook_id
  attr_reader :password

  validates :email, :username, :session_token, presence: true
  validates :password, length: { within: 6..64, allow_nil: true }
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :email, email: true
  validates :username, username: true
  validates :email, :username, :session_token, uniqueness: true

  before_validation :ensure_session_token

  belongs_to(
    :default_notebook,
    class_name: "Notebook",
    foreign_key: :notebook_id,
    primary_key: :id
  )

  has_many(
    :notebooks,
    class_name: "Notebook",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :tags,
    class_name: "Tag",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many :notes, through: :notebooks, source: :notes

  def self.find_by_credentials(email_or_username, password)
    if email_or_username.include?('@')
      user = User.find_by_email(email_or_username)
    else
      user = User.find_by_username(email_or_username)
    end

    return nil if user.nil?

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end

  private

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
