angular.module('Celeb')

.factory('Persons', function ItemsFactory($http) {
	
	return {
		getAll: function() {
			return $http({method:'GET', url:'data/person.json'});
		},
		getOne: function( id ) {
			return $http({method:'GET', url:'data/person.json'});
		}
	}
});