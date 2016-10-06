'use strict';

angular.module('oscra-ui.headbar').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '/root',
            views:{
                'headbar':{
                    template: require('./headbarlayout.html')
                },
                'mainpanel':{
                    template: '<div ui-view="sidebar"></div>'+
                    '<div ui-view="contentpanel"></div>',
                    controller:function($scope,$state){
                        $state.go('root.mainpanel')
                    }
                }
            }
        });
    $urlRouterProvider.otherwise('/root');

});



