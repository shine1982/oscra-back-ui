'use strict';

module.exports = function controller(UserService, $stateParams, $state){

    var vm = this;

    vm.modify = modify;

    var userToModify;

    init();

    function init() {
        console.log($stateParams.userId);
        UserService.findById($stateParams.userId, function (response) {
            userToModify = response.data;
            vm.firstName = userToModify.firstName;
            vm.lastName = userToModify.lastName;
        });

    }

    function modify() {
        var user = {};
        user.firstName = vm.firstName;
        user.lastName = vm.lastName;
        user.id=$stateParams.userId;
        UserService.modify(user,function (response) {
            $state.go('usersall');
        })
    }
};