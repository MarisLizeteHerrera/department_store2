1.times do
  department_amount = 10
  department_amount.times do 
    department = Department.create(
      name: Faker::Commerce.department
    )
    end

  100.times do
    Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_f,
      department_id: rand(1..department_amount)
    )
    end


end
puts "Data Seeded"