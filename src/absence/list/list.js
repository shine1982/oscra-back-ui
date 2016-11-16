'use strict';

module.exports = function controller(AbsenceService, $scope){

    var vm = this;
    vm.content=[];
    vm.toggleSearch = false;
    vm.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    vm.sortable = ['id','starttime', 'endtime','status','provider','lastModifyBy','updated', 'action'];
    vm.count = 5;


    init();

    function init() {
        vm.currentpage=0;
        vm.headers = [{name:'Id', field:'id'},
            {name: 'Début', field:'starttime'},
            {name: 'Fin', field:'endtime'},
            {name: 'Statut', field: 'status'},
            {name: 'Demandeur', field: 'provider'},
            {name: 'Mis à jour par', field:'lastModifyBy'},
            {name: 'Date de mis à jour', field:'updated'},
            {name: 'Action', field: 'action'}];
        vm.statusflag={
            'TO_VALIDATE': 'blankflag',
            'AGREED': 'greenflag',
            'REFUSED': 'redflag'
        };
        AbsenceService.fakelist(vm.currentpage, function (response) {
            var absences = adaptToHeaders(response.data);
            vm.content = absences;
            console.log('absences content are')
            console.log(vm.content)
        })
    }

    function adaptToHeaders(absences){
        absences.forEach(function(absence){
            absence['provider']=convertUserObjToName(absence['provider']);
            absence['lastModifyBy']=convertUserObjToName(absence['lastModifyUser']);
            absence['starttime']=convertToDateString(absence['starttime']);
            absence['endtime']=convertToDateString(absence['endtime']);
            absence['updated']=convertToDateString(absence['updated']);
            delete absence["validator"];
        })
        return absences;
    }

    function convertToDateString(obj){
        return (new Date(obj)).toLocaleDateString();
    }
    function convertUserObjToName(user){
        return user.firstName+' '+ user.lastName;
    }

    $scope.$on('sendDeleteId', function(event,absence){
        AbsenceService.delete(absence.id,function (response) {
            if (response.status ==200){
                var index = vm.content.indexOf(absence);
                vm.content.splice(index,1);
            }else{
                alert('System internal error');
            }
        })
    })

    $scope.$on('sendCurrentPage', function(event,currentPage){
        vm.currentpage=currentPage;
        AbsenceService.fakelist(vm.currentpage, function (response) {
            var absences = adaptToHeaders(response.data);
            vm.content.splice.apply(vm.content, [vm.content.length, 0].concat(absences))

        })
    })

};