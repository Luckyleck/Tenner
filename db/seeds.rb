# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!("users")

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: "Demo-lition",
    email: "demo@user.io",
    password: "password",
    fname: "Kool",
    lname: "Aid",
  )

  # More users
  10.times do
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      fname: Faker::Name.first_name,
      lname: Faker::Name.last_name,
      password: "password",
    })
  end

  Review.create!({
    body: 'Great gig man! Thank you so much',
    reviewer_id: 2, # the reviewer
    review_rating: 5,
    communication_rating: 5,
    recommend_rating: 5,
    service_rating: 5,
    user_id: 1 # the person getting reviewed
  })

  10.times do
    user_id = rand(1..10)
    reviewer_id = rand(1..10)
    
    while reviewer_id == user_id do
      reviewer_id = rand(1..10)
    end
    
    Review.create!({
      body: Faker::Quote.fortune_cookie,
      reviewer_id: reviewer_id,
      review_rating: rand(1..5),
      communication_rating: rand(1..5),
      recommend_rating: rand(1..5),
      service_rating: rand(1..5),
      user_id: user_id
    })
  end

  puts "Done!"
end
