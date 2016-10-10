'use strict';

module.exports = function controller(UserService, $state){

    var vm = this;

    vm.create = create;

    function create() {
        var user = {};
        user.firstName = vm.firstName;
        user.lastName = vm.lastName;

        UserService.create(user,function (response) {
            $state.go('root.mainpanel.userall');
        })
    }
};