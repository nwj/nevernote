class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :notebooks, :user_id
    add_index :notebooks, [:user_id, :name], unique: true
  end
end
