'use strict';

function FooDirCtrl() {

}





angular.module('oscra-ui.user').directive('userinfo', function(){
    return {
        restrict: 'E',
        scope: {
            tuser: '=suser'
        },

        template: require('./directiveTemplate/userAllInfo.html'),
        link: function($scope){}
    };
})
