10.times do
  Department.create(
    name: Faker::Commerce.department
  )
end
  100.times do
    item = Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_f,
      department_id: rand(1..10)
    )
    10.times do 
      item.reviews.create(
        title: Faker::BreakingBad.episode,
        body: Faker::BackToTheFuture.quote,
        rating: rand(1..5),
        author: Faker::BackToTheFuture.character
      ) 
  end 
end
puts "Data Seeded"