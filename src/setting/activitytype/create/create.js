'use strict';

module.exports = function controller($rootScope,ActivityTypeService, $mdDialog) {
    var vm=this;
    vm.title={
        name:'Ajouter un type d\'activite',
        description:'Description',
        category: 'Catégorie'
    }

    init()

    function init(){
        //ActivityTypeService.
    }

    vm.answer = function(answer) {

        console.log(answer)

        $rootScope.$emit('sendAddIdViaSimpleTable', answer);


        $rootScope.$on('AddActivityTypeDone',function(event){
            $mdDialog.hide(answer);
        })
    };
}