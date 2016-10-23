'use strict';


angular.module('oscra-ui.cra').component('crainfo', {
    bindings: {
        craprovider: '=',
        initcra: '=',
        activities : '=',
        status : '=',
        days:'='
    },
    template: require('./componentTemplate/craInfo.html'),
    controller: function craInfoController(){
        var vm=this;
        vm.selectedActivity;
        vm.getSelectedText = function(element) {
            if (element !== undefined) {
                return element;
            } else {
                return "Choisir un element";
            }
        };
    }
});
