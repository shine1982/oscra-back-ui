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
    controller: function craInfoController($scope, $filter){
        var vm=this;
        init();

        vm.getSelectedText = function(element) {
            if (element !== undefined) {
                return element;
            } else {
                return "Choisir un element";
            }
        };
        vm.addActivity = function(activity){
            vm.craActivities.unshift(activity);
            var actcount=[]
            for (var i=0;i<32;i++){
                actcount[i]=0;
            }
            vm.clickcount[activity]=actcount;
        }


        function init(){
            console.log('cra init phase');
            console.log(vm.craprovider)
            console.log(vm.initcra)
            // add total
            vm.craActivities = [];
            vm.clickcount=[];
            // add all exisited activities
            vm.initcra.activities.forEach(function(activity){
                var startday = (new Date(activity.starttime)).getDate();
                var endday = (new Date(activity.endtime)).getDate();
                var actcount=clearMonthDayCounter();

                for (var day=startday;day<=endday;day++){
                    actcount[day]= activity.amorpm == 0 ? 3: activity.amorpm;
                }
                if (vm.craActivities.indexOf(activity.activityType.name)<0){
                    vm.craActivities.push(activity.activityType.name);
                    vm.clickcount[activity.activityType.name]=actcount;
                }else{
                    mergeCounter(actcount, activity.activityType.name);
                }
            })
            vm.craActivities.push('Total');
            vm.clickcount['Total']=clearMonthDayCounter();
        }

        function mergeCounter(src, aname){
            for(var i=0;i<src.length;i++){
                vm.clickcount[aname][i]+=src[i];
            }
        }

        function clearMonthDayCounter(){
            var daycounter=[];
            for (var i=0;i<32;i++){
                daycounter[i]=0;
            }
            return daycounter;
        }

        vm.chooseDay = function (activity,day){
            var newact = (vm.clickcount[activity][day.getDate()]+1)%4;
            vm.clickcount[activity][day.getDate()] = newact;
            var sum=0;
            for (var i=0;i<vm.craActivities.length;i++){
                if (vm.craActivities[i] !=  undefined && vm.craActivities[i]!= 'Total'){
                    switch(vm.clickcount[vm.craActivities[i]][day.getDate()]){
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
            vm.clickcount[activity][day.getDate()]= newact;
            vm.clickcount['Total'][day.getDate()] = sum;
        }

        vm.submit = function(){
            var persistActivities=handleActivities();
            vm.initcra['activities']=persistActivities;
            console.log(vm.initcra)
            $scope.$emit('sendCra', vm.initcra);
        }

        function handleActivities(){
            var persistActivities=[];
            for (var i=0;i<vm.activities.length;i++){
                if (vm.activities[i]!='Total' && vm.clickcount[vm.activities[i]]!== undefined ){
                    var arrayToInsert = handleEachActivity(vm.activities[i],vm.clickcount[vm.activities[i]])
                    persistActivities.splice.apply(persistActivities, [persistActivities.length, 0].concat(arrayToInsert));
                }
            }
            return persistActivities;
        }

        function handleEachActivity(actname,actcount){
            var allactions=[];
            var isStarted=false;
            var count=0, starttime=0, endtime=0;
            for (var i=0;i <vm.days.length;i++){
                switch(isStarted){
                    case false:
                        switch(actcount[vm.days[i].getDate()-1]){
                            case 0:
                                break;
                            case 1: //0.5 am
                                starttime = vm.days[i].getDate();
                                endtime=vm.days[i].getDate();
                                allactions.push(createActionObject(starttime, endtime, actname,1));
                                break;
                            case 2://0.5 pm
                                starttime = vm.days[i].getDate();
                                endtime=vm.days[i].getDate();
                                allactions.push(createActionObject(starttime, endtime, actname,2));
                                break;
                            case 3:// 1 day
                                isStarted = true;
                                starttime = vm.days[i].getDate();
                                break;
                        };
                        break;
                    case true:
                        switch(actcount[vm.days[i].getDate()-1]){
                            case 0:
                                endtime = vm.days[i].getDate();
                                allactions.push(createActionObject(starttime, endtime, actname,0));
                                isStarted = false;
                                break;
                            case 1: //0.5 am
                                endtime=vm.days[i].getDate();
                                allactions.push(createActionObject(starttime, endtime, actname,1));
                                break;
                            case 2://0.5 pm
                                endtime=vm.days[i].getDate();
                                allactions.push(createActionObject(starttime, endtime, actname,2));
                                break;
                            case 3:// 1 day
                                break;
                        };
                        break;
                };
            }
            return allactions;
        }

        function createActionObject(starttime,endtime,actname,amOrpm){
            var yearmonth=vm.initcra.month.split('-');
            return {
                'starttime': new Date(parseInt(yearmonth[0]),parseInt(yearmonth[1]-1), starttime),
                'endtime': new Date(parseInt(yearmonth[0]),parseInt(yearmonth[1]-1), endtime),
                'amorpm': amOrpm,
                'duration': endtime-starttime+1,
                'activityType': {'name':actname}
            }
        }
    }
})
    .filter('dateFormat', function ($filter) {
        return function (input) {
            if (input == null){return '';}
            var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
            return _date.toUpperCase();

        }
    })
    .filter('getDayOnly', function ($filter) {
        return function (input) {
            if (input == null){return '';}
            var _date = $filter('date')(new Date(input), 'dd');
            return _date;

        }
    });;

