'use strict';
/*
* http://codepen.io/anon/pen/XjPprv
* */
module.exports = function controller(UserService, $mdToast, $scope, $state){

    var vm = this;
    vm.users=[];
    vm.content=[];
    vm.toggleSearch = false;
    vm.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    vm.sortable = ['id','firstName', 'lastName','email','mobilePhone','address','position', 'role'];
    vm.count = 5;

    vm.greeting="Hello, World!";

    vm.currentpage=0;
    vm.doSearch = doSearch;

    init();

    function init() {
        vm.headers = [{name:'Id', field:'id'},
            {name: 'Prénom', field: 'firstName'},
            {name: 'Nom', field:'lastName'},
            {name: 'E-mail', field: 'email'},
            {name: 'Portable', field: 'phoneNumber'},
            {name: 'Adresse', field: 'address'},
            {name: 'Fonction', field: 'position'},
            {name: 'Rôle', field: 'role'},
            {name: 'Action', field: 'action'}];
        UserService.fakelist(vm.currentpage,function (response) {
            vm.users = response.data;
            console.log(vm.users)
            vm.content = vm.users;
        })
    }

    function doSearch(params){
        console.log(params)
        vm.searchParams = params;
    }

    $scope.$on('sendDeleteId', function(event,user){
        console.log(user)
        UserService.delete(user.id,function (response) {
            if (response.status ==200){
                var index = vm.content.indexOf(user);
                vm.content.splice(index,1);
            }else{
                alert('System internal error');
            }
        })
    })

    $scope.$on('sendCurrentPage', function(event,currentPage){
        vm.currentpage=currentPage;
        UserService.fakelist(vm.currentpage,function (response) {
            var insertUsers = response.data;
            vm.content.splice.apply(vm.content, [vm.content.length, 0].concat(insertUsers))
        })
    })
};