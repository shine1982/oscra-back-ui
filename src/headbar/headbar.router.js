'use strict';

angular.module('oscra-ui.headbar').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '/root',
            views:{
                'headbar':{
                    template: require('./headbarlayout.html'),
                    controller:function($scope, $mdSidenav){
                        $scope.showMobileMainHeader = true;
                        $scope.openSideNavPanel = function() {
                            $mdSidenav('left').toggle();
                        };
                        $scope.closeSideNavPanel = function() {
                            $mdSidenav('left').close();
                        };
                    }
                },
                'mainpanel':{
                    template: //'<div ui-view="sidebar"></div>'+
                    '<div layout="row" ui-view="contentpanel"></div>',
                    controller:function($scope,$state){
                        $state.go('root.mainpanel')
                    }
                }
            }
        });
    $urlRouterProvider.otherwise('/root');

});



