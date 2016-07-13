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
