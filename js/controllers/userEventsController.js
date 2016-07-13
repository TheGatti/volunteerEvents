module.exports = function (app) {
    app.controller('userEventsController', ['$scope', 'eventsService', function ($scope, eventsService) {
        console.log("User Events Controller is working");
        $scope.events = eventsService.getEvents();
    }]);
}
