class Gig < ApplicationRecord
  validates :title, presence: true, length: { minimum: 5 }
  validates :description, presence: true, length: {
                            minimum: 5, maximum: 25,
                          }

  has_many :reviews,
           foreign_key: :gig_id,
           class_name: :Gig
end
