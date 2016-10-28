module.exports = function ModifyController($scope,ActivityTypeService, $mdDialog, element) {
    var vm=this;
    vm.title='Modifier le type d\'activite';
    console.log('modify scope')

    vm.submit = function(answer) {
        var activityType = element;
        activityType['name']=answer;
        $scope.$emit('sendModifyIdViaSimpleTable', activityType);
        /*
        $scope.$on('AddActivityTypeDone',function(event){
            $mdDialog.hide(answer);
        })*/
    };
}