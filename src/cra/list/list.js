'use strict';

module.exports = function controller(CraService, ActivityService, $scope){

    var vm = this;

    $scope.selectedId;
    vm.content=[]


    $scope.$watch(function(scope) { return scope.selectedId }, function(){
        //alert($scope.selectedId)
        if ($scope.selectedId > 0)
            vm.secondLocked = false;
    })

    init();

    function init(){
        vm.headers=[
            {name: 'Id', field:'id'},
            {name: 'Month', field: 'month'},
            {name: 'First Name', field: 'firstName'},
            {name: 'Given Name', field: 'lastName'},
            {name: 'Validation', field:'validation'},
            {name: 'Status', field: 'status'},
            {name: 'Last modified by', field: 'lastModifyBy'},
            {name: 'Last updated time', field: 'Date'},
            {name: 'Action', field: 'action'}
        ];
        vm.sortable = ['id','month', 'validation','status','lastModifyBy','lastUpdatedTime'];
        vm.count=5
        getAllCras()

    }

    function getAllCras(){
        CraService.list(function(response){
            var rawcra = response.data;
            var finalcra=[];
            for (var i=0;i<rawcra.length;i++){
                var cradata ={
                    "id": rawcra[i].id, "month": rawcra[i].month,"firstName":rawcra[i].provider.firstName,
                    "lastName":rawcra[i].provider.lastName, "status":rawcra[i].status,"Date": (new Date(rawcra[i].updated)).toISOString(),
                    "lastModifyBy": rawcra[i].lastModifyUser.firstName+' '+rawcra[i].lastModifyUser.lastName
                };
                finalcra.push(cradata);
            }
            vm.content =finalcra
        })
    }

    $scope.$on('sendDeleteId', function(event,cra){
        CraService.delete(cra.id,function (response) {
            if (response.status ==200){
                var index = vm.content.indexOf(cra);
                vm.content.splice(index,1);
            }else{
                alert('System internal error');
            }
        })
    })


    function getAllActivities() {
        ActivityService.list($scope.selectedId, function (response) {
            //console.log(response.data)
            vm.activities = response.data;
        })
    }


};