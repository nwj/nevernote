# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :note do
    title { Faker::Company.catch_phrase }
    url { Faker::Internet.url }
    content { Faker::Lorem.paragraph }
  end
end
