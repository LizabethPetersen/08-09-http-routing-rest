[![Build Status](https://travis-ci.org/LizabethPetersen/08-09-http-routing-rest.svg?branch=master)](https://travis-ci.org/LizabethPetersen/08-09-http-routing-rest)

# Lab 08: Vanilla REST API w/ Routing and In Memory Persistence

 ## Documentation
 My resource is motorcycles, added to the databse by random users of the app. I want to map the types and quantities of motorcycles in the Seattle area.

 Currently, my registered routes are POST and GET. POST creates a new instance of a record (user, make, model, year, description, with a unique user ID and date the record is created). GET allows us to retrieve the data, based on a user ID; I will add functionality to retrieve all users. Also, I will add PUT and DELETE routes, so that a developer can update the information in the motorcycles database, and/or delete same.