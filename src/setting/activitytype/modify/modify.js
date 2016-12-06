module.exports = function controller($rootScope, element, $mdDialog) {
    console.log('elemene in modif is ')
    console.log(element)
    var vm=this;
    vm.title={
        name:'Ajouter un type d\'activite',
        description:'Description',
        category: 'Catégorie'
    }

    init()

    function init(){
        console.log('activity type element')
        console.log(element)
        //ActivityTypeService.findById
    }

    vm.answer = function(answer) {

        var activityType = element;
        activityType['name']=answer.toUpperCase();
        console.log('the answer is '+activityType)
        $rootScope.$emit('sendModifyIdViaSimpleTable', activityType);

        $rootScope.$on('ModifyActivityTypeDone',function(event){
            $mdDialog.hide(answer);
        })
    };
}