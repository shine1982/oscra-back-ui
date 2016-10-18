'use strict';
/*
* http://codepen.io/anon/pen/XjPprv
* */
module.exports = function controller(UserService, $mdToast, $scope){

    var vm = this;
    vm.users=[];
    vm.content=[];
    vm.toggleSearch = false;
    //vm.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    vm.sortable = ['id','firstName', 'lastName','email','mobilePhone','address','position', 'role'];
    vm.count = 3;

    init();

    function init() {
        vm.headers = [{name:'Id', field:'id'},
            {name: 'First Name', field: 'firstName'},
            {name: 'Last Name', field:'lastName'},
            {name: 'Email', field: 'email'},
            {name: 'Mobile Phone', field: 'mobilePhone'},
            {name: 'Address', field: 'address'},
            {name: 'Position', field: 'position'},
            {name: 'Role', field: 'role'},
            {name: 'Action', field: 'action'}];
        UserService.list(function (response) {
            vm.users = response.data;
            vm.content = vm.users;
        })
    }
};