'use strict';

module.exports = function controller(UserService, $state, $scope){

    var vm = this;
    vm.title="Créer un nouveau utilisateur";
    vm.inituser=null;
    init();

    function init(){
        UserService.managerlist(function(response){
            vm.managers = response.data;
        })
    }

    $scope.$on('sendUser', function(event,user){
        console.log('the user is sent to backend. ');
        console.log(user);
        user['role']='USER';
        user['enabled']=true;
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