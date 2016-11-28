'use strict';

module.exports = function ($scope, $rootScope, $mdDialog, $state, LoginService, $cookies) {

    var vm = this;
    var originatorEv;
    vm.isSideNavOpen= false;
    vm.announceClick = announceClick;
    init();

    vm.openSideNavPanel = function () {
        console.log('clicked')
        sendOpenLeftSideNavEvent()
        vm.isSideNavOpen = !vm.isSideNavOpen
    };
    vm.closeSideNavPanel = function () {
        vm.isSideNavOpen = !vm.isSideNavOpen
    };

    function init(){
        configureUserMenu();
        console.log('current user in cookie');
        var currentUserid= $cookies.get('currentUser');
        console.log(currentUserid)
    }

    function configureUserMenu(){
        vm.usermenu=['Mon Profile', 'Déconnecter']
    }

    function sendOpenLeftSideNavEvent(){
        $rootScope.$emit('openLeftSideNav',[])
    }

    function announceClick (index) {
        switch (index){
            case 0:
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('You clicked!')
                        .textContent('You clicked the menu item at index ' + index)
                        .ok('Nice')
                        .targetEvent(originatorEv)
                );
                originatorEv = null;
                break;
            case 1:
                LoginService.signout(function(response){
                    if (response.status==200){
                        $state.go('beforelogin');
                    }else {
                        alert('System error')
                    }
                })

                break;
        }

    }

};

