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
                    template:
                    '<div layout="column" ui-view flex-offset="25"></div>',
                    controller:function($scope,$state){
                        //$state.go('root.activityall')
                    }
                }
            }
        });
    $urlRouterProvider.otherwise('/root');

});



