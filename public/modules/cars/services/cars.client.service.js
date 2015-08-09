'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('cars').factory('Cars', ['$resource',
	function($resource) {
		return $resource('cars/:carId', {
			carId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);