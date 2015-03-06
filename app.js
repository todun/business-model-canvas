// APP MODULES ===============================================
// congigure the modules to include on our app
var app = angular.module('pbCanvas', [
  'ngRoute',
  'evgenyneu.markdown-preview'
]);



// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller

app.config(function($routeProvider) {

    $routeProvider
      // home page (canvas page)
      .when('/canvas', {
        redirectTo: '/'
      })  
      .when('/', {
        templateUrl: 'angular/templates/canvas.html',
        controller: 'mainController'
      })
      // contact page
      .when('/contact', {
          templateUrl: 'angular/templates/contact.html',
      })
      // about page
      .when('/about', {
          templateUrl: 'angular/templates/about.html',
      })
      //help
      .when('/help', {
          templateUrl: 'angular/templates/help.html',
      })
      .when('/view/:boxname', {
          templateUrl: 'angular/templates/view.html',
          controller: 'viewController'
      })
      .when('/edit/:boxname', {
          templateUrl: 'angular/templates/edit.html',
          controller: 'viewController'
      })
      .when('/changelog', {
          templateUrl: 'angular/templates/changelog.html',
      })
      //404
      .when('/404', {
          templateUrl: 'angular/templates/404.html',
      })
      .otherwise({
        redirectTo: '404'
      });
});
  

// CONTROLLERS ============================================
// home page controller

app.controller("mainController", function($scope, $routeParams, $location) {

  //LocalStorage
  var localdata = '';
  if(chrome.app.window){
    chrome.storage.local.set({key: 'Piero'}, function() {console.log('Settings saved');});
    chrome.storage.local.get('key', function(localdata){
      $('#probando').html('ChromeApp '+localdata.key);
    });
    
  }else{
    dataobject = JSON.stringify({key: 'Piero'});
    localStorage.setItem('pbStorage', dataobject);
    localdata = JSON.parse(localStorage.getItem('pbStorage'));
    $('#probando').html('WebApp '+localdata.key);
  }
  
//  var localData = JSON.parse(localStorage.getItem("pbBMC"));
//  if(localData == undefined) {
//    $.getJSON( "template.json", function( data ) { //Get template DB
//      localStorage.setItem("pbBMC", JSON.stringify(data));
//    });
//  }
//  $scope.localdata = localData;
});

app.controller("viewController", function($scope, $routeParams, $location) {
//  $scope.params = $routeParams;
//  
//  //Read localstorage
//  var localData = JSON.parse(localStorage.getItem("pbBMC"));
//  if(localData !== undefined)
//    $scope.textMD = localData[$routeParams.boxname];
//  
//  //Read boxes information
//  $.getJSON( "boxes.json", function( data ) {
//    $scope.box = data[$routeParams.boxname];
//    $scope.boxes = data;
//    $scope.$apply();
//  });
  
  //Write localstorage
//  if( $location.path().match('\/edit\/') ) {
//    setInterval(
//      function () {
//        localData[$routeParams.boxname] = $('textarea').val();
//        localStorage.setItem("pbBMC", JSON.stringify(localData));
//      },
//      3000
//    );
//  }
});