'use strict';

angular.module('oscra-ui.headbar').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('root', {
            //url: '/headbar',
            //template: require('./layout.html')//,
          //  controller: require('./layout'),
          //  controllerAs: 'headbarMenu'
            views:{
                'headbar':{
                    template:require('./layout.html')
                },
                'mainpanel':{}
            }
        });
    //$urlRouterProvider.otherwise('/headbar');
    //$urlRouterProvider.otherwise('/user/list');


});



