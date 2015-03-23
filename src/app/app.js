angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location , $mdSidenav) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Angualr Material' ;
    }
  });
  $scope.menus = [
    {
      name : "Home",
      url : "home"
    },
    {
      name : "About",
      url : "about"
    }
  ];

  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };

})

;

