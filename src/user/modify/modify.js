'use strict';

module.exports = function controller(UserService, $stateParams, $state, $scope){

    var vm = this;
    vm.title="Modifier cet utilisateur";
    init();

    function init() {
        UserService.findById($stateParams.userId, function (response) {
            console.log('init user')
            console.log(response.data)
            vm.inituser=response.data;
        });

        UserService.managerlist(function(response){
            console.log(response.data)
            vm.managers = response.data;
        })
    }

    $scope.$on('sendUser', function(event,user){
        //console.log(user)
        UserService.modify(user,function (response) {
            if (response.status ==200){
                alert('ok');
                $scope.$broadcast("userUpdated")
                $state.go('root.userall');
            }else{
                alert('System internal error');
            }
        })
    })

}