'use strict';


angular.module('oscra-ui.absence').component('absenceinfo', {
    bindings: {
        absence: '='
    },
    template: require('./componentTemplate/absenceInfo.html'),
    controller: function absenceInfoController($scope){
        var vm=this;
        vm.isloading = false;
        vm.status=['TO_VALIDATE','AGREED','REFUSED'];
        vm.submit = function(){
            vm.isloading = true;
            console.log(vm.absence)
            $scope.$emit('sendAbsence', vm.absence);
        }

        $scope.$on('absenceUpdated', function(){
            vm.isloading = false;
        })
    }
})
    .filter('dateFormat', function ($filter) {
        return function (input) {
            if (input == null){return '';}
            var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
            return _date.toUpperCase();

        }
    });
