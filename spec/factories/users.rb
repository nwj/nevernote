# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    username { Faker::Internet.user_name }
    email { Faker::Internet.email }
    password "password"

    factory :user_with_everything do
      ignore do
        notebooks_count 3
        tags_count 2
      end

      after(:create) do |user, evaluator|
        create_list(
          :notebook_with_notes,
          evaluator.notebooks_count,
          user_id: user.id
        )
        create_list(:tag, evaluator.tags_count, user_id: user.id)
      end
    end
  end
end
