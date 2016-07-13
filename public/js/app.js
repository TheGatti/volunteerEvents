(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (app) {
    app.controller('availableEventsController', ['$scope', 'eventsService', function ($scope, eventsService) {
        console.log("Available Events Controller is working");
        $scope.events = eventsService.getEvents();
        $scope.goTo = function(target){
        console.log(target)
        eventsService.attend(target)
   }
    }]);
}

},{}],2:[function(require,module,exports){
module.exports = function (app) {
    app.controller('LoginController', ['$scope', 'userService', function ($scope, userService) {
        console.log("Login Controller is working")
    }]);
}

},{}],3:[function(require,module,exports){
module.exports = function (app) {
    app.controller('userEventsController', ['$scope', 'eventsService', function ($scope, eventsService) {
        console.log("User Events Controller is working");
        $scope.events = eventsService.getEvents();
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

    let allEvents = [];
    let attendingEvents = [];

    return {
      getEvents: function() {
        console.log("Here are the Events")
        $http({
          method: "GET",
          url: "http://localhost:3000/api/events.JSON",
        }).then(function success(response){
          console.log(response.data);
          angular.copy(response.data,allEvents);
        });

        return allEvents;
      },
      // Let the server know they took it
      attend: function (target) {
          console.log("attending event")
          $http({
            method: "POST",
            url: "http://localhost:3000/api/events.JSON" + target.id
          }).then(function success(response){
            console.log(response.data);
            angular.copy(response.data,allEvents);

          })

          // return borrow(book);
      },
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