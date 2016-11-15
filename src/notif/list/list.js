'use strict';

module.exports = function controller(CraNotifService, AbsenceNotifService, $scope){

    var vm = this;
    init();

    function init(){
        var currentuserid=2;
        vm.cranotifCurrentpage=0;
        vm.cranotifHeaders=[{name:'Id', field:'id'},
            {name: 'Cra', field: 'cra'},
            {name: 'CraFrom', field: 'crafrom'},
            {name: 'Description', field: 'description'}
        ];
        CraNotifService.receivedCraFakeList(vm.cranotifCurrentpage, currentuserid, function(response){
            console.log('cranotifs')
            console.log(response.data)
            vm.cranotifcontent=response.data;
        })

        vm.absencenotifCurrentpage=0;
        vm.cranotifHeaders=[{name:'Id', field:'id'},
            {name: 'Absence', field: 'absence'},
            {name: 'AbsenceFrom', field: 'absencefrom'},
            {name: 'Description', field: 'description'}
        ];
        AbsenceNotifService.receivedAbsenceFakeList(vm.absencenotifCurrentpage, currentuserid, function (response) {
            console.log('absencenotifs')
            console.log(response.data)
            vm.absencenotifcontent = response.data;
        })
    }

};