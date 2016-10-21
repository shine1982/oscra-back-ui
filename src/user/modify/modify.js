'use strict';

module.exports = function controller(UserService, $stateParams, $state){

    var vm = this;

    vm.submit = modify;


    init();

    function init() {
        //console.log($stateParams.userId);

        UserService.findById($stateParams.userId, function (response) {
            vm.inituser=response.data;
        });
    }

    function modify() {
        var user = {};
        user.firstName = vm.firstName;
        user.lastName = vm.lastName;
        user.id=$stateParams.userId;
        UserService.modify(user,function (response) {
            $state.go('root.userall');
        })
    }
}