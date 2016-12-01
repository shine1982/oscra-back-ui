'use strict';

module.exports = function ($scope,$rootScope, MyProfile, $state ) {

    var vm = this;
    init()
    function init() {
        if (MyProfile.getCurrentUser() != undefined && MyProfile.getCurrentUser() != null ){
            if (MyProfile.getCurrentUser().role == "ADMIN") {
                $state.go('root');
            }
        }
    }
};

