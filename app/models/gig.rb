class Gig < ApplicationRecord
    
    validates :title, presence: true, length: { in: 5..25, message: "title must be between 5 and 25 characters long" }
    validates :base_price, presence: true, numericality: { greater_than: 1, message: "Price must be greater than 1"}
    validates :description, presence: true

    belongs_to :seller, class_name: "User"
    has_many :reviews
    has_many :likes

end
