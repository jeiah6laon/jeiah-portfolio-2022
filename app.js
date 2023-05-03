var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource']);

//ROUTE

portfolioApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/profile.html',
            controller: 'profileController'
        })
        .when('/work-experiences', {
            templateUrl: 'pages/work.html',
           controller: 'workController'
        })
        .when('/education', {
            templateUrl: 'pages/educ.html',
          //  controller: ''
        })
        .when('/others', {
          templateUrl: 'pages/others.html',
        //  controller: ''
      })
        .when('/character-references', {
            templateUrl: 'pages/charref.html',
          //  controller: ''
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
          //  controller: ''
        })
    }]);

// CONTROLLER
portfolioApp.controller('profileController', ['$scope', function ($scope) {
    $scope.profile;

  
}]);


portfolioApp.controller('workController', ['$scope', '$window', function ($scope, $window) {
  $scope.onClick = function () {
    $window.location.href = "#!/work-experiences";
}
}]);


// NOTES
// main dropdown route
//content: profile, others, contact
//add pearlpay and elinnov: charref and work 

