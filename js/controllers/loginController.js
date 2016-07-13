module.exports = function (app) {
    app.controller('LoginController', ['$scope', 'userService', function ($scope, userService) {
        console.log("Login Controller is working")
    }]);
}
