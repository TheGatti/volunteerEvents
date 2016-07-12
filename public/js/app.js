(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (app) {
    app.controller('availableEventsController', ['$scope', '$http', '$location', 'eventsService', function ($scope, $http, $location, eventsService) {
        
    }]);
}

},{}],2:[function(require,module,exports){
module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'userService', function ($scope, $http, $location, userService) {
        // $scope.name = '';
        // $scope.password = '';
        // $scope.tab = 0;
        //
        // $scope.login = function () {
        //     console.log(`${$scope.name} in as we speak`);
        //     loginService.userLogin($scope.name, $scope.password, $scope.tab);
        //     $location.path('/library');
        // };
    }]);
}

},{}],3:[function(require,module,exports){
module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'eventsService', function ($scope, $http, $location, eventsService) {
        
    }]);
}

},{}],4:[function(require,module,exports){
'use strict';

var app = angular.module('volunteerApp', ['ngRoute']);

// controllers
require('./controllers/availableEventsController.js')(app);
require('./controllers/loginController.js')(app);
require('./controllers/userEventsController.js')(app);

// services
require('./services/eventsService.js')(app);
require('./services/userService.js')(app);

// routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'LoginController',
    templateUrl: 'templates/loginTemplate.html'
  }).when('/login', {
    controller: 'LoginController',
    templateUrl: 'templates/loginTemplate.html'
  }).when('/myevents', {
    controller: 'userEventsController',
    templateUrl: 'templates/userEventsTemplate.html'
  }).when('/allevents', {
    controller: 'availableEventsController',
    templateUrl: 'templates/allEventsTemplate.html'
  });
}]);
},{"./controllers/availableEventsController.js":1,"./controllers/loginController.js":2,"./controllers/userEventsController.js":3,"./services/eventsService.js":5,"./services/userService.js":6}],5:[function(require,module,exports){
module.exports = function(app){


  app.factory('eventsService',['$http', function($http){

    return {

    };
  }]);
};

},{}],6:[function(require,module,exports){
module.exports = function(app){


  app.factory('userService',['$http', function($http){

    return {

    };
  }]);
};

},{}]},{},[4])