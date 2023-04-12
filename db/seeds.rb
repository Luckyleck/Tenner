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
  Gig.destroy_all
  Review.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!("users")
  ApplicationRecord.connection.reset_pk_sequence!("gigs")
  ApplicationRecord.connection.reset_pk_sequence!("reviews")

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

  puts "Creating Gigs"

  10.times do
    Gig.create!({
      title: Faker::Job.title,
      description: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
      base_price: rand(5..100),
      image: "https://picsum.photos/630/430",
      seller_id: rand(1..10),
    })
  end

  Review.create!({
    body: "Great gig man! Thank you so much",
    reviewer_id: 2, # the reviewer
    gig_id: 1,
    review_rating: 5,
    communication_rating: 5,
    recommend_rating: 5,
    service_rating: 5,
  })

  puts "Creating Reviews"

  10.times do
    Review.create!({
      body: Faker::Quote.fortune_cookie,
      reviewer_id: rand(1..10),
      gig_id: rand(1..10),
      review_rating: rand(1..5),
      communication_rating: rand(1..5),
      recommend_rating: rand(1..5),
      service_rating: rand(1..5),
    })
  end

  puts "Done!"
end
