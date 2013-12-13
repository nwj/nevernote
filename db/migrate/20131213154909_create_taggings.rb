class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :taggings, :note_id
    add_index :taggings, :tag_id
  end
end
