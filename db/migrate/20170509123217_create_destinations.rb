class CreateDestinations < ActiveRecord::Migration[5.0]
  def change
    create_table :destinations do |t|
      t.string :city
      t.string :country
      t.text :description
      t.float :latitude
      t.float :longitude
      t.string :address

      t.timestamps
    end
  end
end
