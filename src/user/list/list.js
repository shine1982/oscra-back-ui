'use strict';

module.exports = function controller(UserService){

    var vm = this;


    init();

    function init() {

        UserService.list(function (response) {

            vm.users = response.data;
        })
    }
};