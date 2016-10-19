'use strict';

module.exports = function controller(UserService, CraService, ActivityService, $scope){

    var vm = this;

    $scope.selectedId;
    vm.users=[];
    vm.userContent=[];
    vm.toggleSearch = false;
    vm.userHeaders = [
        {name: '', field:'toggle'},
        {name:'Id', field:'id'},
        {name: 'First Name', field: 'firstName'},
        {name: 'Last Name', field:'lastName'},
        {name: 'Email', field: 'email'},
        {name: 'Mobile Phone', field: 'mobilePhone'},
        {name: 'Address', field: 'address'},
        {name: 'Position', field: 'position'},
        {name: 'Role', field: 'role'},
        {name: 'Action', field: 'action'}];
    vm.userSortable = ['id','firstName', 'lastName','email','mobilePhone','address','position', 'role'];
    vm.count = 3;

    vm.craPerMonthHeaders=[
        {name: '', field:'toggle'},
        {name: 'Id', field:'id'},
        {name: 'Month', field: 'month'},
        {name: 'Validation', field:'validation'},
        {name: 'Status', field: 'status'},
        {name: 'Last modified by', field: 'lastModifyBy'},
        {name: 'Last updated time', field: 'lastUpdatedTime'}
    ];
    vm.craPerMonthSortable = ['id','month', 'validation','status','lastModifyBy','lastUpdatedTime'];
    $scope.$watch(function(scope) { return scope.selectedId }, function(){
        //alert($scope.selectedId)
        if ($scope.selectedId > 0)
            vm.secondLocked = false;
    })

    vm.selectTab2 = function() {
        //list(providerId, start, end, callBack)
        alert('one selected');
        var providerId =1;
        var starttime="20161019";
        var endtime="20161020";
        vm.thirdLocked = false;
        CraService.list(providerId, starttime, endtime, function(response){
            console.log(response.data)
        })
    }

    vm.selectTab3 = function() {
        //alert('two selected');
        var currentdate = new Date();
        console.log(currentdate.getMonth())
        //getAllActivities();
    }

    init();

    function init(){
        vm.selectedIndex = 0;
        vm.secondLocked = false;
        vm.thirdLocked = false;

        UserService.list(function (response) {
            //console.log(response.data)
            vm.users = response.data;
            vm.userContent = vm.users;
        })
    }

    function getCrasByInterval(){
        CraService.list()
    }

    function getAllActivities() {
        ActivityService.list($scope.selectedId, function (response) {
            //console.log(response.data)
            vm.activities = response.data;
        })
    }


};