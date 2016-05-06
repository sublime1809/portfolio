(function() {
	var navigation = angular.module('navigation', []);

	navigation.controller('navigationCtrl', ['$scope', '$element', function($scope, $element) {
		$scope.expanded = false;
		$scope.menuStructure = [
			{'name': 'Portfolio', 'link': ''},
			{'name': 'About Me', 'link': ''},
			{'name': 'Technologies', 'link': ''},
			{'name': 'Request Quote', 'link': ''}
		];

		$scope.toggleMenu = function() {
			if ( $scope.expanded ) 
				$element.removeClass('expanded');
			else 
				$element.addClass('expanded');
			$scope.expanded = !$scope.expanded;
		};

		$scope.teaseMenu = function() {
			if ( !$scope.expanded ) {
				$element.addClass('hovered');
			}
		};

		$scope.unteaseMenu = function() {
			$element.removeClass('hovered');
		};

	}]);

	navigation.directive('navigation', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/navigation.html',
			controller: 'navigationCtrl',
			controllerAs: 'navigation'
		}
	});
})();