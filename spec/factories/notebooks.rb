# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :notebook do
    name { Faker::Lorem.word }


    factory :notebook_with_notes do
      ignore do
        notes_count 5
      end

      after(:create) do |notebook, evaluator|
        create_list(:note, evaluator.notes_count, notebook_id: notebook.id)
      end
    end
  end
end
