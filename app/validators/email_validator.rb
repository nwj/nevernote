class EmailValidator < ActiveModel::EachValidator
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  def validate_each(record, attribute_name, value)
    unless value =~ EMAIL_REGEX
      message = options[:message] || "is not an email"
      record.errors[attribute_name] << message
    end
  end
end
