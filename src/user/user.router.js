'use strict';

angular.module('oscra-ui').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('usersall', {
            url: '/user/list',
            template: require('./list/list.html'),
            controller: require('./list/list'),
            controllerAs: 'userList'
        })
        .state('usermodify', {
            url: '/user/modify/:userId',
            template: require('./modify/modify.html'),
            controller: require('./modify/modify'),
            controllerAs: 'userModify'
        })
        .state('userdelete', {
            url: '/user/delete/:userId',
            template: require('./delete/delete.html'),
            controller: require('./delete/delete'),
            controllerAs: 'userDelete'
        })
        .state('usercreate', {
            url: '/user/create',
            template: require('./create/create.html'),
            controller: require('./create/create'),
            controllerAs: 'userCreate'
        });

    $urlRouterProvider.otherwise('/user/list');
});
