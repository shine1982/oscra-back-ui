'use strict';


angular.module('oscra-ui.cra').component('crainfo', {
    bindings: {
        craprovider: '=',
        initcra: '=',
        activities: '=',
        status: '=',
        days:'='
    },
    template: require('./componentTemplate/craInfo.html'),
    controller: function craInfoController($scope){
        var vm=this;
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
            var newact = (vm.clickcount[activity][day.getDate()-1]+1)%4;
            vm.clickcount[activity][day.getDate()-1] = newact;
            var sum=0;
            for (var i=0;i<vm.craActivities.length;i++){
                if (vm.craActivities[i] !=  undefined && vm.craActivities[i]!= 'Total'){
                    switch(vm.clickcount[vm.craActivities[i]][day.getDate()-1]){
                        case 0:
                            sum+=0;break;
                        case 1:
                            sum+=0.5;break;
                        case 2:
                            sum+=0.5;break;
                        case 3:
                            sum+=1;break;
                        default:
                            break;
                    }

                }
            }
            vm.clickcount[activity][day.getDate()-1]= newact;
            vm.clickcount['Total'][day.getDate()-1] = sum;
        }

        vm.submit = function(){
            handleActivities()
            console.log('init cra activities ' + vm.initcra.activities)
            console.log('selectedStatus '+vm.initcra.status);
            console.log('comments '+vm.initcra.description);
            //$scope.$emit('sendDeleteId', element);
        }

        function handleActivities(){
            for (var i=0;i<vm.activities;i++){
                if (vm.activities[i]!='Total')
                    handleEachActivity(vm.activities[i],vm.clickcount[vm.activities[i]]);
            }
        }

        function handleEachActivity(actname,actcount){
            var allactions=[];
            var isStarted=false;
            var count=0, starttime=0, endtime=0;
            for (var i=0;i <vm.days.length;i++){
                if (actcount[vm.days[i].getDate()-1] == 0 && isStarted === false) continue;
                else if (actcount[vm.days[i].getDate()-1] == 0 && isStarted === true){
                    endtime = vm.days[i].getDate();
                    isStarted = false;
                    var yearmonth=vm.initcra.month.split('-')
                    var action ={
                        'starttime': new Date(parseInt(vm.cratime[0]),parseInt(vm.cratime[1]-1), starttime),
                        'endtime': new Date(parseInt(vm.cratime[0]),parseInt(vm.cratime[1]-1), endtime),
                        'duration': endtime-starttime+1,
                        'activityType': actname
                    }
                    allactions.push(action);
                }


            }

        }


    }
});
