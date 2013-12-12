class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, default: "Untitled"
      t.text :content
      t.string :url
      t.integer :notebook_id, null: false
      t.timestamps
    end

    add_index :notes, :notebook_id
  end
end

