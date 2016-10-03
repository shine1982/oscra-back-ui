'use strict';

module.exports = function controller(UserService, $stateParams, $state){

    var vm = this;

    vm.delete = remove;

    init();

    function init() {

        UserService.findById($stateParams.userId, function (response) {
            vm.user = response.data;
        });

    }

    function remove(userId){

        UserService.delete(userId,function (response) {
            $state.go('usersall');
        })
    }
};