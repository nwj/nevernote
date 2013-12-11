class UsernameValidator < ActiveModel::EachValidator
  USERNAME_REGEX = /\A[a-z0-9][-_a-z0-9]*[a-z0-9]\z/i

  def validate_each(record, attribute_name, value)
    unless value =~ USERNAME_REGEX
      message = options[:message] || "is not a valid username"
      record.errors[attribute_name] << message
    end
  end
end
