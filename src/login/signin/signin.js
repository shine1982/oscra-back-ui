'use strict';

module.exports = function ($state, LoginService) {

    var vm = this;

    vm.signin = signin;

    function signin(user){
        console.log(user)

        LoginService.signin(user.username,user.password, function (response) {
            console.log(response.data)
            $state.go('root');
        });

    }

};

