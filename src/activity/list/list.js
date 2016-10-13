'use strict';

module.exports = function controller(UserService, ActivityService, $scope, $mdToast, $state){

    var vm = this;

    $scope.selectedId;
    init();
    vm.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    vm.getters={
        firstName: function (value) {
            //this will sort by the length of the first name string
            return value.firstName.length;
        }
    }

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

    vm.selectTab2 = function() {
        //alert('one selected');
        vm.thirdLocked = false;
    }

    vm.selectTab3 = function() {
        //alert('two selected');
        getAllActivities();
    }
};