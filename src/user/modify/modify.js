'use strict';

module.exports = function controller(UserService, $stateParams, $state){

    var vm = this;
    vm.name = 'Todd Motto';
    vm.firstName = 'test'
    vm.modify = modify;

    var userToModify;

    init();

    function init() {
        //console.log($stateParams.userId);
        var user = {};
        UserService.findById($stateParams.userId, function (response) {
            userToModify = response.data;
            vm.firstName=userToModify.firstName;
            /*
            Object.keys(userToModify).forEach(function(key, idx) {
               vm[key]=userToModify[key];
            });*/
        });
    }

    function modify() {
        var user = {};
        user.firstName = vm.firstName;
        user.lastName = vm.lastName;
        user.id=$stateParams.userId;
        UserService.modify(user,function (response) {
            $state.go('root.mainpanel.userall');
        })
    }
}