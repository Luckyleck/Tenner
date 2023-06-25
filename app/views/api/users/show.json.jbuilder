json.user do
    json.extract! @user, :id, :email, :username, :fname, :lname, :created_at, :updated_at
    json.photoUrl @user.photo.attached? ? @user.photo.url : nil
end