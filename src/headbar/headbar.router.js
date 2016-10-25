'use strict';

angular.module('oscra-ui.headbar').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '/root',
            views:{
                'headbar':{
                    template: require('./headbarlayout.html'),
                    controller:function($scope, $timeout, $mdSidenav, $mdUtil, $log /*$scope, $mdSidenav*/) {

                         $scope.$on('$viewContentLoaded', function(){
                         $mdSidenav('left')
                         .toggle()
                         .then(function(){
                         console.log('toggled')
                         })
                         });

                         $scope.openSideNavPanel = function() {
                         $mdSidenav('left').toggle();
                         };
                         $scope.closeSideNavPanel = function() {
                         $mdSidenav('left').close();
                         };

                         $scope.openSmallSideNavPanel = function() {
                         $mdSidenav('leftSmall').toggle();
                         };
                         $scope.closeSmallSideNavPanel = function() {
                         $mdSidenav('leftSmall').close();
                         };

/*
                        $scope.toggleLeft = buildToggler('left');
                        $scope.lockLeft = true;

                        function buildToggler(navID) {
                            var debounceFn = $mdUtil.debounce(function () {
                                $mdSidenav(navID)
                                    .toggle()
                                    .then(function () {
                                        $log.debug("toggle " + navID + " is done");
                                    });
                            }, 300);

                            return debounceFn;
                        }


                        $scope.close = function () {
                            $mdSidenav('left').close()
                                .then(function () {
                                    $log.debug("close LEFT is done");
                                });

                        };
*/
                    }
                },
                'mainpanel':{
                    template:
                        '<div hide show-gt-xs layout="column" ui-view flex-offset="25" flex="75"></div>'+
                        '<div hide show-xs layout="column" ui-view flex-offset="10" flex="90"></div>',
                    controller:function($scope,$state){
                        //$state.go('root.activityall')
                    }
                }
            }
        });
    $urlRouterProvider.otherwise('/root');

});



