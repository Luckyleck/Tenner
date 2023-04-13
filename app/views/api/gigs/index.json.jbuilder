json.array! @gigs do |gig|
    json.id gig.id
    json.title gig.title
    json.description gig.description
    json.base_price gig.base_price
    json.seller do
      json.id gig.seller.id
      json.name gig.seller.name
      # ... other attributes of the seller that you want to include
    end
    json.reviews gig.reviews do |review|
      json.id review.id
      json.body review.body
      # ... other attributes of the review that you want to include
    end
end