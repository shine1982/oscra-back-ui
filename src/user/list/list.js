'use strict';

module.exports = function controller(UserService,$http, $scope, $mdToast, $state){

    var vm = this;


    init();
    $scope.deleteRowCallback = function(rows){
        alert('Are you sure to delete the selected items ?');
        $mdToast.show(
            $mdToast.simple()
                .content('Deleted row id(s): '+rows)
                .hideDelay(3000)
        );
    };

    function init() {
        UserService.list(function (response) {
            //console.log(response.data)
            vm.users = response.data;
        })

    }
};