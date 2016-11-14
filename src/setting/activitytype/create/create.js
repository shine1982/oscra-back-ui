'use strict';

module.exports = function controller($rootScope,$mdDialog, $scope) {
    var vm=this;
    vm.title={
        name:'Ajouter un type d\'activite',
        label:'Ajouter un label'
    }

    vm.answer = function(answer) {
        /*
        console.log('current scope is ')
        console.log($scope)
        console.log('parent scope is ')
        console.log($scope.$parent)*/
        //console.log('entering create controller')
        $rootScope.$emit('sendAddIdViaSimpleTable', answer);

        //console.log('sent event in create controller')

        $rootScope.$on('AddActivityTypeDone',function(event){
            $mdDialog.hide(answer);
        })
    };
}