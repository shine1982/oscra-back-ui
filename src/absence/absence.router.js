'use strict';

angular.module('oscra-ui.absence').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('root.absencelist', {
            url: '/absence/list',
            template: require('./list/list.html'),
            controller: require('./list/list'),
            controllerAs: 'absenceList'
        })
        .state('root.absencecreate', {
            url: '/absence/create',
            template: require('./create/create.html'),
            controller: require('./create/create'),
            controllerAs: 'craCreate'
        })
/*
        .state('root.cramodify', {
            url: '/cra/modify/:craId',
            template: require('./modify/modify.html'),
            controller: require('./modify/modify'),
            controllerAs: 'craModify'
        })
        .state('root.cracreate', {
            url: '/cra/create',
            template: require('./create/create.html'),
            controller: require('./create/create'),
            controllerAs: 'craCreate'
        })*/
});


