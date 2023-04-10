class Gig < ApplicationRecord
    
    validates :title, presence: true, length: { minimum: 5 }
    validates :description, presence: true, length: { minimum: 5, maximum: 25, message: "5 characters minimum, 25 maximum" }
    validates :base_price, presence: true, numericality: { greater_than: 1, message: "must be greater than 1"}

    has_many :reviews,
        foreign_key: :gig_id,
        class_name: :Gig, 
        dependent: :destroy

end
