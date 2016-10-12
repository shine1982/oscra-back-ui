'use strict';

module.exports = function controller(UserService, ActivityService, $scope, $mdToast, $state){

    var vm = this;

    $scope.selectedId;
    init();

    function init(){
        vm.selectedIndex = 0;
        vm.secondLocked = true;
        vm.thirdLocked = true;
        UserService.list(function (response) {
            //console.log(response.data)
            vm.users = response.data;
        })
    }

    $scope.$watch(function(scope) { return scope.selectedId }, function(){
        //alert($scope.selectedId)
        if ($scope.selectedId > 0)
            vm.secondLocked = false;
    })

    function getAllActivities() {
        ActivityService.list($scope.selectedId,function (response) {
            //console.log(response.data)
            vm.activities = response.data;
        })
    }

    $scope.selectTab2 = function() {
        //alert('one selected');
        vm.thirdLocked = false;
    }

    $scope.selectTab3 = function() {
        //alert('two selected');
        getAllActivities();
    }
};