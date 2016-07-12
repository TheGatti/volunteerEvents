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
