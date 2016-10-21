'use strict';

angular.module('oscra-ui.cra').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('root.cralist', {
            url: '/cra/list',
            template: require('./list/list.html'),
            controller: require('./list/list'),
            controllerAs: 'craList'
        })

        .state('root.cramodify', {
            url: '/cra/modify/:craId',
            template: require('./modify/modify.html'),
            controller: require('./modify/modify'),
            controllerAs: 'craModify'
        })
       /*/*
        .state('root.cra.userall', {
            url: '/cra/user/all',
            template: require('./user/list.html'),
            controller: require('./user/list'),
            controllerAs: 'craUserList'
        })
        .state('root.cra.usermodify', {
            url: '/user/modify/:userId',
            template: require('./modify/modify.html'),
            controller: require('./modify/modify'),
            controllerAs: 'userModify'
        })/*
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
