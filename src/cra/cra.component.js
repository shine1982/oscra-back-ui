'use strict';


angular.module('oscra-ui.cra').component('crainfo', {
    bindings: {
        craprovider: '=',
        initcra: '=',
        activitiesHeader : '=',
        status : '=',
        days:'='
    },
    template: require('./componentTemplate/craInfo.html'),
    controller: function craInfoController($scope){
        var vm=this;
        vm.selectedActivity;
        vm.selectedStatus;
        vm.getSelectedText = function(element) {
            if (element !== undefined) {
                return element;
            } else {
                return "Choisir un element";
            }
        };
        vm.addActivity = function(activity){
            //alert(activity)
            vm.craActivities.unshift(activity);
            var actcount=[]
            for (var i=0;i<32;i++){
                actcount[i]=0;
            }
            vm.clickcount[activity]=actcount;
        }
        init();
        function init(){
            vm.craActivities = ['Total'];
            vm.clickcount=[];
            var actcount=[]
            for (var i=0;i<32;i++){
                actcount[i]=0;
            }
            vm.clickcount['Total']=actcount;
        }

        vm.chooseDay = function (activity,day){
            var newact = (vm.clickcount[activity][day.getDate()-1]+1)%3;
            vm.clickcount[activity][day.getDate()-1] = newact;
            var sum=0;
            for (var i=0;i<vm.craActivities.length;i++){
                if (vm.craActivities[i] !=  undefined && vm.craActivities[i]!= 'Total'){
                    sum+= vm.clickcount[vm.craActivities[i]][day.getDate()-1];
                }
            }
            vm.clickcount[activity][day.getDate()-1]= newact;
            vm.clickcount['Total'][day.getDate()-1] = sum;
        }

        vm.submit = function(){
            console.log('init cra activities ' + vm.initcra.activities)
            console.log('selectedStatus '+vm.initcra.status);
            console.log('comments '+vm.initcra.description);
            //$scope.$emit('sendDeleteId', element);
        }


    }
});
