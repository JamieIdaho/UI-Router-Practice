;(function (){

  'use strict';

  var allThePretzels = [
      {
        id: 1,
        brand: 'Philly',
        type: 'Soft'
      },
      {
        id: 2,
        brand: 'Rold Gold',
        type: 'Twist'
      },
      {
        id: 3,
        brand: 'Rold Gold',
        type: 'Squares'
      },
      {
        id: 4,
        brand: 'Snyders',
        type: 'Honey Mustard'
      }


    ];

  angular.module('Pretzels', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('pretzel', {
          url: '/',
          templateUrl: 'js/templates/home.tpl.html',
          controller: 'PretzelCtrl'

        })
        .state('pretzel.info', {
          url: ':pretzelId',
          templateUrl: 'js/templates/info.tpl.html',
          controller: 'PretzelCtrl'
        })
        .state('pretzel.info.brand', {
          url: '/:brand',
          templateUrl: 'js/templates/brand.tpl.html',
          controller: 'BrandCtrl'
        });
    }
  ])

  .controller('PretzelCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
    $scope.pretzels = allThePretzels;

    if($stateParams.pretzelId !== undefined) {
      var prezId = Number($stateParams.pretzelId);
      $scope.pretzel = _.findWhere($scope.pretzels, {id: prezId});
    }

    $scope.goHome = function () {
      $state.go('pretzel');
    };

  }])

  .controller('BrandCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.pretzelBrands = _.filter(allThePretzels, function (p) {
      return p.brand === $stateParams.brand;
    });
  }]);

}());












