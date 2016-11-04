'use strict';

module.exports = function controller(AbsenceService, $scope){

    var vm = this;
    vm.absences=[];
    vm.content=[];
    vm.toggleSearch = false;
    vm.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    vm.sortable = ['id','firstName', 'lastName','email','mobilePhone','address','position', 'role'];
    vm.count = 5;

    init();

    function init() {
        vm.headers = [{name:'Id', field:'id'},
            {name: 'Provider', field: 'provider'},
            {name: 'Start time', field:'starttime'},
            {name: 'End time', field:'endtime'},
            {name: 'Validator', field:'validator'},
            {name: 'LastModifyBy', field:'lastModifyBy'},
            {name: 'Action', field: 'action'}];
        AbsenceService.list(function (response) {
            vm.absences = adaptToHeaders(response.data);
            console.log('list absences')
            console.log(vm.absences)
            vm.content = vm.absences;
        })
    }

    function adaptToHeaders(absences){
        absences.forEach(function(absence){
            absence['provider']=convertUserObjToName(absence['provider']);
            absence['validator']=convertUserObjToName(absence['validator']);
            absence['lastModifyBy']=convertUserObjToName(absence['lastModifyUser']);
            console.log(absence['starttime'])
            absence['starttime']=convertToDateString(absence['starttime']);
            absence['endtime']=convertToDateString(absence['endtime']);
        })
        return absences;
    }

    function convertToDateString(obj){
        return (new Date(obj)).toLocaleDateString();
    }
    function convertUserObjToName(user){
        console.log('here the scope is in convertUserobj')
        console.log(user)
        return user.firstName+' '+ user.lastName;
    }

    $scope.$on('sendDeleteId', function(event,absence){
        console.log(absence)
        AbsenceService.delete(absence.id,function (response) {
            if (response.status ==200){
                var index = vm.content.indexOf(absence);
                vm.content.splice(index,1);
            }else{
                alert('System internal error');
            }
        })
    })

};