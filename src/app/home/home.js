angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'ngMaterial'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, $mdBottomSheet) {
  $scope.todos = [
        {
         what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        }
    ];
  $scope.showGridBottomSheet = function($event){
    $mdBottomSheet.show({
        templateUrl: 'home/templates/bottomSheetTemplate.tpl.html',
        controller: 'BottomSheetCtrl',
        targetEvent: $event
      });
  };
})
.controller('BottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'fa-share-square-o' },
    { name: 'Upload', icon: 'fa-cloud-upload' },
    { name: 'Copy', icon: 'fa-files-o' },
    { name: 'Print this page', icon: 'fa-print' }
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})

;

