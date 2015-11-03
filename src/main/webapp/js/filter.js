angular.module("duelosApp")

/*
 * Lo de abajo es un template, no tendriamos que tocar desde aca!
 */

.filter('retadorSearch', function(){
	return function(person,people){
		if(person == ''){
			return people;
		}
		var result = [];
		for (p in people) {
			if(people[p].nombre.indexOf(person) !== -1){
				result.push(people[p])
			}
		};
		return result;
	}
})

;