'use strict';
/*
* http://codepen.io/anon/pen/XjPprv
* */
module.exports = function controller(UserService, $mdToast, $scope){

    var vm = this;
    vm.users=[];
    vm.content=[]
    vm.toggleSearch = false;
    //vm.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    vm.sortable = ['id','firstName', 'lastName','email','mobilePhone','address','position', 'role'];
    vm.thumbs = 'thumb';
    vm.count = 3;

    init();
    vm.deleteRowCallback = function(rows){
        alert('Are you sure to delete the selected items ?');
        $mdToast.show(
            $mdToast.simple()
                .content('Deleted row id(s): '+rows)
                .hideDelay(3000)
        );
    };

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