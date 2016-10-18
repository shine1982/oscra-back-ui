'use strict';


angular.module('oscra-ui.user').component('userinfo', {
    bindings: {
        user: '='
    },
    template: require('./componentTemplate/userAllInfo.html'),
    controller: function userInfoController(){
    }
});
