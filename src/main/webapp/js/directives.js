angular.module("duelosApp")

.directive('footerData', function() {
	  return {
		  restrict: 'E',
		  templateUrl: 'partials/footer-data.html'
	  };
	})

.directive('selectedElementData', function() {
	  return {
		  restrict: 'E',
		  templateUrl: 'partials/selectedElement-data.html'
	  };
	})
	
.directive('caracteristicas', function() {
	return {
		restrict: 'E',
		scope: {
			abilities: "=",
			topTitle: "@"
		},
		templateUrl: 'partials/caracteristicas.html'
	};
})

.directive('encontreRivalData', function() {
	  return {
	    templateUrl: 'partials/encontre-rival.html'
	  };
	})	
	;
