class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|

      t.timestamps
    end
  end
end
