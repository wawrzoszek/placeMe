angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('PWCtrl', function($scope, $http, $ionicLoading) {
  $scope.title = "Messages";
  $scope.showLoading = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };
  $scope.hideLoading = function(){
    $ionicLoading.hide();
  };
  $scope.showLoading();
  var url = 'http://beta.json-generator.com/api/json/get/JEh90qG';
  $http.get(url).success(function(data){
    $scope.messages = data;
    $scope.hideLoading();
  });
})

.controller('PWSingleCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/newComment.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.showModalComment = function() {
    $scope.modal.show();
  };

  $scope.closeLogin = function() {
    $scope.modal.hide();
    alert($scope.modal.loginData.username);
  };
})
;
