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
  Review.destroy_all
  Gig.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."

  ApplicationRecord.connection.reset_pk_sequence!("users")
  ApplicationRecord.connection.reset_pk_sequence!("gigs")
  ApplicationRecord.connection.reset_pk_sequence!("reviews")

  puts "Creating users..."

  User.create!(
    username: "Demo-lition",
    email: "demo@user.io",
    password: "password",
    fname: "Kool",
    lname: "Aid",
  )

  # More users
  20.times do
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      fname: Faker::Name.first_name,
      lname: Faker::Name.last_name,
      password: "password",
    })
  end

  puts "Creating Gigs"

  Gig.create!(
    title: "Design a stylish website for you",
    description: "I am a web developer with 45+ years of experience. I've been coding since before I was born. I'm passionate about creating websites and I'm sure I could bring your dream website to fruition.",
    base_price: 6000,
    image: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_2106819729.jpg",
    seller_id: 1
  )

  20.times do
    random_string = Faker::Alphanumeric.alphanumeric(number: 5)

    Gig.create!({
      title: Faker::Job.title,
      description: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
      base_price: rand(5..100),
      image: "https://picsum.photos/seed/#{random_string}/630/430",
      seller_id: rand(1..10),
    })
  end

  Review.create!({
    body: "Great gig man! Thank you so much",
    reviewer_id: 2,
    gig_id: 1,
    review_rating: 5,
    communication_rating: 5,
    recommend_rating: 5,
    service_rating: 5,
  })

  puts "Creating Reviews"

  25.times do
    Review.create!({
      body: Faker::Quote.famous_last_words,
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
