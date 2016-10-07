'use strict';

module.exports = function controller(UserService,$http){

    var vm = this;


    init();

    function init() {

        $http.get("/src/user/user.json").then(function(response){
            //console.log(response.data["userlist"]);
            vm.users=response.data["userlist"];

        })
        /*
        UserService.list(function (response) {

            vm.users = response.data;
        })
        */
    }
};