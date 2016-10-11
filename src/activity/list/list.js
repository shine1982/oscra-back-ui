'use strict';

module.exports = function controller(ActivityService, $scope, $mdToast, $state){

    var vm = this;

    $scope.data = {
        selectedIndex: 0,
        secondLocked:  true,
        secondLabel:   "Item Two",
        bottom:        false
    };
    $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };

    $scope.deleteRowCallback = function(rows){
        alert('Are you sure to delete the selected items ?');
        $mdToast.show(
            $mdToast.simple()
                .content('Deleted row id(s): '+rows)
                .hideDelay(3000)
        );
    };

    function getAllUsers(){

    }
    
    function getAllActivities() {

        ActivityService.list(userId,function (response) {
            //console.log(response.data)
            vm.users = response.data;
        })

    }
};