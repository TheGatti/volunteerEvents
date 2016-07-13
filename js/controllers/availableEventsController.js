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
