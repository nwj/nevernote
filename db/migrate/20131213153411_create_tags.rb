class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name
      t.integer :user_id
      t.timestamps
    end

    add_index :tags, :user_id
    add_index :tags, [:user_id, :name], unique: true
  end
end
