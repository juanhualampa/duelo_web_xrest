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
	
.directive('mrXData', function() {
	  return {
		  restrict: 'E',
		  templateUrl: 'partials/mrX.html'
	  };
	})	
	
.directive('encontreRivalData', function() {
	  return {
	    templateUrl: 'partials/encontre-rival.html'
	  };
	})	
	;
