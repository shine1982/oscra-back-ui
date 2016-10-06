'use strict';

angular.module('oscra-ui.mainpanel').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root.mainpanel', {
            url: '/mainpanel',
            views:{
                'sidebar':{
                    template: require('./../mainpanel/sidebar/sidebar.html')/*,
                     controller: function($scope,$state){
                     $state.go('root.mainpanel.userall')
                     }*/
                },
                'contentpanel':{
                    template: require('./../mainpanel/contentpanel/content.html')
                }
            }
        });

});



