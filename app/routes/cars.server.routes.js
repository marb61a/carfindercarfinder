'use strict';

// Module Dependencies
var users = require('../../app/controllers/users.server.controller');
var cars = require('../../app/controllers/cars.server.controller');

module.exports = function(app){
  
    // Car Routes
   app.route('/cars')
		.get(cars.list,cars.search)
		.post(users.requiresLogin, cars.create);

	app.route('/cars/:carId')
		.get(cars.read)
		.put(users.requiresLogin, cars.hasAuthorization, cars.update)
		.delete(users.requiresLogin, cars.hasAuthorization, cars.delete);

	// Finish by binding the car middleware
	app.param('carId', cars.carByID);
	app.param('carMake', cars.carByMake);
};