angular.module('Celeb')

.controller('DetailsCtrl', function($scope, $routeParams, Persons) {
	$scope.personId = $routeParams.personId;
	$scope.person = {}
	
	Persons.getOne( $scope.personId)
	.then(function(response){
	  	//success
	  	var persons = response.data.persons;
		persons.forEach(function ( i ) {
			if (i.id == $routeParams.personId) {
				$scope.person = i;
			}
		
		});
	  
  	}, function(response){
	  	//error
		  
  	});
      
});