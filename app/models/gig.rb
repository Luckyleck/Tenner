class Gig < ApplicationRecord

    # validate :at_least_one_photo_attached
    
    validates :title, presence: true, length: { in: 5..25, message: "title must be between 5 and 25 characters long" }
    validates :base_price, presence: true, numericality: { greater_than: 1, message: "Price must be greater than 1"}
    validates :description, presence: true

    belongs_to :seller, class_name: "User"
    has_many :reviews
    has_many :likes
    has_many_attached :images

    # def image_urls
    #     images.map { |image| Rails.application.routes.url_helpers.url_for(image)}
    # end

    def image_urls
        images.map { |image| url_for(image) }
    end

    private

    # def at_least_one_photo_attached
    #     unless photos.attached?
    #         errors.add(:photos, "At least one photo must be attached")
    #     end
    # end
end
