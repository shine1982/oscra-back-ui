'use strict';

module.exports = function controller(UserService, $scope){

    var vm = this;

    $scope.selectedId;
    vm.users=[];
    vm.content=[];
    vm.toggleSearch = false;
    vm.headers = [
        {name: 'toggle', field:'toggle'},
        {name:'Id', field:'id'},
        {name: 'First Name', field: 'firstName'},
        {name: 'Last Name', field:'lastName'},
        {name: 'Email', field: 'email'},
        {name: 'Mobile Phone', field: 'mobilePhone'},
        {name: 'Address', field: 'address'},
        {name: 'Position', field: 'position'},
        {name: 'Role', field: 'role'},
        {name: 'Action', field: 'action'}];
    vm.sortable = ['id','firstName', 'lastName','email','mobilePhone','address','position', 'role'];
    vm.count = 3;
/*
    $scope.$watch(function(scope) { return scope.selectedId }, function(){
        //alert($scope.selectedId)
        if ($scope.selectedId > 0)
            vm.secondLocked = false;
    })

    vm.selectTab2 = function() {
        //alert('one selected');
        vm.thirdLocked = false;
    }

    vm.selectTab3 = function() {
        //alert('two selected');
        getAllActivities();
    }
*/
    init();

    function init(){
        vm.selectedIndex = 0;
        vm.secondLocked = true;
        vm.thirdLocked = true;

        UserService.list(function (response) {
            //console.log(response.data)
            vm.users = response.data;
            console.log("all users are "+vm.users)
            vm.content = vm.users;
        })

        console.log('vm content in list page'+ vm.content)
    }

    function getAllActivities() {
        ActivityService.list($scope.selectedId,function (response) {
            //console.log(response.data)
            vm.activities = response.data;
        })
    }


};