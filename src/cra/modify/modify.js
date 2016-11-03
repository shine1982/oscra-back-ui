'use strict';

module.exports = function controller(CraService, ActivityTypeService, $stateParams, $scope, $state){

    var vm = this;

    init();

    function init() {
        vm.needLoadData = 2;
        CraService.findById($stateParams.craId, function (response) {
            vm.initcra = response.data;
            console.log('In modification cra')
            console.log(vm.initcra)
            vm.craprovider = vm.initcra.provider
            vm.cratime=vm.initcra.month.split("-");
            vm.days=getDaysInMonth(parseInt(vm.cratime[1])-1,parseInt(vm.cratime[0]));
            vm.initActivities = vm.initcra.activities;
            vm.needLoadData-=1;
        });
        vm.activitiesHeader=[];
        ActivityTypeService.list(function(response){
            var activityTypes = response.data;
            for (var i=0; i<activityTypes.length;i++){
                vm.activitiesHeader.push(activityTypes[i].name);
            }
            vm.needLoadData-=1;
        })
        //vm.activitiesHeader =['CP','RTT','CP Sans Solde'];
        vm.statusHeader =[ 'NOT_TRANSIMITTED',
            'TRANSIMITTED_NOT_VALIDATED',
            'VALIDATED_TRANSIMITTED'];

    }

    function getDaysInMonth(month, year) {
        // attention: here is the local time, when display the time, by default, it's in UTC
        var date = new Date(year, month, 1, 5);
        var days = [];
        while (date.getMonth() == month) {
            days.push(new Date(date));

            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    $scope.$on('sendCra', function(event,initcra){
        console.log('cra in modification : '+initcra );
        console.log(initcra);

        var providerId = initcra.provider.id;
        var validatorId = initcra.validator.id;
        var lastModifyUserId = initcra.lastModifyUser.id;
        delete initcra["provider"];
        delete initcra["validator"];
        delete initcra["lastModifyUser"];
        CraService.modify(initcra, providerId, validatorId, lastModifyUserId, function (response){
            console.log(response.data)
            if (response.status ==200){

               // $state.go('root.cralist');
            }else{
                alert('System internal error');
            }
        })
    });
}
