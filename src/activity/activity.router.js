'use strict';

angular.module('oscra-ui.activity').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('root.activityall', {
            url: '/activity/list',
            template: require('./list/list.html'),
            controller: require('./list/list'),
            controllerAs: 'activityList'
        })
        /*
        .state('root.mainpanel.usermodify', {
            url: '/user/modify/:userId',
            template: require('./modify/modify.html'),
            controller: require('./modify/modify'),
            controllerAs: 'userModify'
        })
        .state('root.mainpanel.userdelete', {
            url: '/user/delete/:userId',
            template: require('./delete/delete.html'),
            controller: require('./delete/delete'),
            controllerAs: 'userDelete'
        })
        .state('root.mainpanel.usercreate', {
            url: '/user/create',
            template: require('./create/create.html'),
            controller: require('./create/create'),
            controllerAs: 'userCreate'
        });*/
});
