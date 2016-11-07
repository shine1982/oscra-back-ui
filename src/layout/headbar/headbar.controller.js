'use strict';

module.exports = function ($scope, $rootScope) {

    //var vm = this;
    $scope.isSideNavOpen= false;
    /*
    $scope.$on('$viewContentLoaded', function () {
        sendOpenLeftSideNavEvent();

        $mdSidenav('left')
            .toggle()
            .then(function () {
                //console.log('toggled')
            })
    });
     */


    $scope.openSideNavPanel = function () {
        //$mdSidenav('left').toggle();
        console.log('clicked')
        sendOpenLeftSideNavEvent()
        $scope.isSideNavOpen = !$scope.isSideNavOpen
    };
    $scope.closeSideNavPanel = function () {
        $scope.isSideNavOpen = !$scope.isSideNavOpen
       // $mdSidenav('left').close();
    };

    function sendOpenLeftSideNavEvent(){
        $rootScope.$emit('openLeftSideNav',[])
    }

};

