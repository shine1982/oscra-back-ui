'use strict';

module.exports = function controller(CraService,$stateParams, $scope){

    var vm = this;

    init();

    function init() {
        CraService.findById($stateParams.craId, function (response) {
            vm.initcra = response.data;
            console.log(vm.initcra)
            vm.craprovider = vm.initcra.provider
            vm.cratime=vm.initcra.month.split("-");
            vm.days=getDaysInMonth(parseInt(vm.cratime[1])-1,parseInt(vm.cratime[0]));
        });

        vm.activitiesHeader =['CP','RTT','CP Sans Solde'];
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
        console.log(initcra);
        CraService.modify(initcra, providerId, validatorId, lastModifyUserId, function (response){
            console.log(response.data)
        })
    });
/*
    UserService.modify(user,function (response) {
        if (response.status ==200){
            alert('ok');
            $scope.$broadcast("userUpdated")
            $state.go('root.userall');
        }else{
            alert('System internal error');
        }
    })
*/
}
