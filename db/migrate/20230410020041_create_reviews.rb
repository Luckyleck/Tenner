class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body
      t.integer :review_rating
      t.integer :communication_rating
      t.integer :recommend_rating
      t.integer :service_rating
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :reviewer_id, null: false
      t.timestamps
    end

    add_foreign_key :reviews, :users, column: :reviewer_id
    add_index :reviews, :reviewer_id
  end
end
