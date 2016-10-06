'use strict';

angular.module('oscra-ui.user').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('root.mainpanel.userall', {
            url: '/user/list',
            template: require('./list/list.html'),
            controller: require('./list/list'),
            controllerAs: 'userList'
        })
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
        });
});
