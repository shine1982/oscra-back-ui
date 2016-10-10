'use strict';

function FooDirCtrl() {

}

function fooDirective() {

    function link($scope) {

    }

    return {
        restrict: 'E',
        scope: {},
        controller: 'FooDirCtrl',
        controllerAs: 'vm',
        bindToController: {
            firstName: '='
        },
        template: [
            '<div><input ng-model="vm.firstName"></div>'
        ].join(''),
        link: link
    };
}

angular
    .module('oscra-ui.user')
    .directive('fooDirective', fooDirective)
    .controller('FooDirCtrl', FooDirCtrl);

/*
angular.module('oscra-ui.user').directive('userinfo', function(){
    return {
        restrict: 'E',
        scope: {
        },
        controller: 'FooDirCtrl',
        controllerAs: 'vm',
        bindToController: {
            firstName: '='
        },
        template: [
            '<div><input ng-model="vm.name"></div>'
        ].join(''),
        //template: require('./directiveTemplate/userAllInfo.html'),
        link: function($scope){}
    };
})*/
