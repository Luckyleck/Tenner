json.gig do
  json.extract! @gig, :id, :title, :description, :seller_id, :base_price, :created_at, :updated_at
  json.reviews @gig.reviews do |review|
    json.extract! review, :id, :body, :gig_id
  end
end