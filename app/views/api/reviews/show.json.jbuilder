json.review do
    json.extract! @review, :id, :body, :created_at, :updated_at
end