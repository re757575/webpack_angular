// someController3.js
var app = require('../app.js');

app.controller('someController3', ['$scope', 'notify', function($scope, notify) {
    console.log('someController3');
    $scope.callNotify = function(msg) {
      notify(msg);
    };
}]);
