let app = angular.module('volunteerApp', ['ngRoute']);

// controllers
require('./controllers/availableEventsController.js')(app);
require('./controllers/loginController.js')(app);
require('./controllers/userEventsController.js')(app);

// services
require('./services/eventsService.js')(app);
require('./services/userService.js')(app);

// routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'LoginController',
      templateUrl: 'templates/loginTemplate.html',
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'templates/loginTemplate.html',
    })
    .when('/myevents', {
      controller: 'userEventsController',
      templateUrl: 'templates/userEventsTemplate.html',
    })
    .when('/allevents', {
      controller: 'availableEventsController',
      templateUrl: 'templates/allEventsTemplate.html',
    })

}])
