class AddGigImage < ActiveRecord::Migration[7.0]
  def change
    add_column :gigs, :image, :string
  end
end
