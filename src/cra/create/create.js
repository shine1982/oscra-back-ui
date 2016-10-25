'use strict';

module.exports = function controller(UserService,$stateParams){

    var vm = this;
    vm.years =[];
    vm.months = [];
    vm.days=[];
    init();

    function init() {
        vm.activitiesHeader =['CP','RTT','CP Sans Solde'];
        vm.status =[ 'NOT_TRANSIMITTED',
            'TRANSIMITTED_NOT_VALIDATED',
            'VALIDATED_TRANSIMITTED'];
        var yearBase = 2016;
        vm.years=getYears(getOffset(yearBase),getRange(yearBase))
        initMonth();
        vm.loadCraDetail = false;
        UserService.list(function (response) {
            vm.users = response.data;
        })
    }

    function initMonth() {
        for (var  i=0;i<12;i++){
            vm.months.push(i+1)
        }

    }

    vm.updateYearMonth = function(month, year){
        //vm.days = getDaysInMonth(month-1, year);
        vm.loadCraDetail = true;
        vm.initcra={
            provider: "admin",
            status: 'NOT_TRANSIMITTED',
            month: vm.selectedYear+'-'+vm.selectedMonth
        };
        vm.days = getDaysInMonth(vm.selectedMonth-1, vm.selectedYear);
    }

    vm.getSelectedText = function(element) {
        //console.log('elem ' +element)
        if (element !== undefined) {
            return element;
        } else {
            return "Choisir un element";
        }
    };

    function getRange(yearBase){
        var currentYear = new Date().getFullYear();
        return currentYear - yearBase
    }

    function getOffset(yearBase){
        var currentYear = new Date().getFullYear();
        return yearBase - currentYear;
    }

    function getYears(offset, range){
        var currentYear = new Date().getFullYear();
        var years = [];
        for (var i = 0; i < range + 1; i++){
            years.push(currentYear + offset + i);
        }
        return years;
    }

    function getDaysInMonth(month, year) {
        // attention: here is the local time, when display the time, by default, it's in UTC
        var date = new Date(year, month, 1, 5);
        var days = [];
        while (date.getMonth() == month) {
            days.push(new Date(date));

            date.setDate(date.getDate() + 1);
        }
        return days;
    }
}
