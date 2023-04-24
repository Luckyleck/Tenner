# class Post < ApplicationRecord
# post = Post.create(title: "First post!")
# file = File.open('app/assets/images/<your-filename>.jpg') # <- Adjust the path here if the image is not in app/assets/images
# post.photo.attach(io: file, filename: '<your-filename>.jpg')
# post.photo.attached? # => true

# end 