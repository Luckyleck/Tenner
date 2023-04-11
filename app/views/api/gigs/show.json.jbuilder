json.gig do
    json.extract! @gig, :title, :description, :seller_id, :base_price, :created_at, :updated_at
end