'use strict';

module.exports = function controller(UserService, $state, $scope){

    var vm = this;
    vm.title="Créer un nouveau utilisateur";
    vm.inituser=null;
    init();

    function init(){
        UserService.managerlist(function(response){
            console.log(response.data)
            vm.managers = response.data;
        })
    }

    $scope.$on('sendUser', function(event,user){
        console.log(user)
        UserService.create(user,function (response) {
            if (response.status ==200){
                alert('ok');
                $scope.$broadcast("userUpdated")
                $state.go('root.userall');
            }else{
                alert('System internal error');
            }
        })


    })
};