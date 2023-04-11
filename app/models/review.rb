class Review < ApplicationRecord
    belongs_to :gig
    belongs_to :reviewer, class_name: "User", foreign_key: "reviewer_id"
end
