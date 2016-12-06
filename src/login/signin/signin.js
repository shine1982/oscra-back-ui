'use strict';

module.exports = function ($state, LoginService, MyProfile, $cookies, $mdDialog) {

    var vm = this;

    vm.signin = signin;

    init();

    function init(){

    }

    function signin(user){
        console.log(user)

        LoginService.signin(user.username,user.password, function (response) {
            console.log(response.data)
            var currentUser = response.data;
            MyProfile.setCurrentUser(currentUser);
            $mdDialog.hide();
            $state.go('root');
        });

    }

};

