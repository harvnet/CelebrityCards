angular.module('Celeb')

.controller('MainCtrl', function($scope, $http, Persons) {
  	$scope.allData;
  
  	//$http({method:'GET', url:'data/items.json'})
  	Persons.getAll()
	.then(function(response){
	  	//success
	  	$scope.allData = response.data;
	  
  	}, function(response){
	  	//error
		  
  	});
    
});