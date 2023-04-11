class CreateGigs < ActiveRecord::Migration[7.0]
  def change
    create_table :gigs do |t|
      t.bigint :seller_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :base_price, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_foreign_key :gigs, :users, column: :seller_id
  end
end
