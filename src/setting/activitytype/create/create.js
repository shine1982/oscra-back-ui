'use strict';

module.exports = function AddController(ActivityTypeService, $mdDialog, $scope) {
    var vm=this;
    vm.title='Ajouter un type d\'activite';
    vm.answer = function(answer) {
        //console.log('entering create controller')
        $scope.$emit('sendAddIdViaSimpleTable', answer);
        console.log(answer)
        //console.log('sent event in create controller')

        /*
        $scope.$on('AddActivityTypeDone',function(event){
            $mdDialog.hide(answer);
        })*/
    };
}