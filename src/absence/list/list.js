'use strict';

module.exports = function controller(){

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
            {name: 'First Name', field: 'firstName'},
            {name: 'Last Name', field:'lastName'},
            {name: 'Email', field: 'email'},
            {name: 'Mobile Phone', field: 'mobilePhone'},
            {name: 'Address', field: 'address'},
            {name: 'Position', field: 'position'},
            {name: 'Role', field: 'role'},
            {name: 'Action', field: 'action'}];

    }
    /*
    $scope.$on('sendDeleteId', function(event,user){
        console.log(user)
        UserService.delete(user.id,function (response) {
            if (response.status ==200){
                var index = vm.content.indexOf(user);
                vm.content.splice(index,1);
            }else{
                alert('System internal error');
            }
        })
    })*/

};