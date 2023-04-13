json.extract! @gig, :id, :title, :description, :base_price, :created_at, :updated_at
json.seller @gig.seller do |seller|
  json.extract! seller, :id, :name, :email # replace with the attributes you want to include
end
json.reviews @gig.reviews do |review|
  json.extract! review, :id, :body, :gig_id
end