'use strict';

module.exports = function controller(UserService, $stateParams, $state){

    var vm = this;

    vm.submit = modify;

    var userToModify;

    init();

    function init() {
        //console.log($stateParams.userId);
        var user = {};
        UserService.findById($stateParams.userId, function (response) {
            userToModify = response.data;
            vm.firstName=userToModify.firstName;
            var user={};
            Object.keys(userToModify).forEach(function(key, idx) {
               user[key]=userToModify[key];
            });
            vm.inituser=user;
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