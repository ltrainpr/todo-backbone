# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.create!(task: "Laundry", complete: false)
Todo.create!(task: "Exercise", complete: false)
Todo.create!(task: "Volunteer", complete: false)
Todo.create!(task: "Groceries")
Todo.create!(task: "Call Grandma")
Todo.create!(task: "Do something nice for wife")
Todo.create!(task: "Read Design Patterns in Ruby")
Todo.create!(task: "Build a Backbone.js app")
