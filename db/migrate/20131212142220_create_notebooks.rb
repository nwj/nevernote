class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|

      t.timestamps
    end
  end
end
