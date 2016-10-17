'use strict';


angular.module('oscra-ui.user').component('userinfo', {
    bindings: {
        user: '='
    },
    template: require('./componentTemplate/userAllInfo.html'),
    controller: function userInfoController(){
    }
})
.component('mdTable',{
    bindings: {
        headers: '=',
        content: '=',
        sortable: '=',
        filters: '=',
        customClass: '=',
        thumbs:'=',
        count: '='
    },
    template: require('./componentTemplate/tableTemplate.html'),
    controller: function mdTableController($scope,$filter) {
        var vm=this;

         var orderBy = $filter('orderBy');
         vm.tablePage = 0;
         vm.nbOfPages = function () {
            return Math.ceil(vm.content.length / vm.count);
         };
         vm.getNumber = function (num) {
            return new Array(num);
         };
         vm.handleSort = function (field) {
            if (vm.sortable.indexOf(field) > -1) { return true; } else { return false; }
         };
         vm.order = function(predicate, reverse) {
            vm.content = orderBy(vm.content, predicate, reverse);
            vm.predicate = predicate;
         };
         vm.order(vm.sortable[0],false);
            vm.getNumber = function (num) {
            return new Array(num);
         };
         vm.goToPage = function (page) {
            vm.tablePage = page;
         }
    }

})
    .filter('startFrom',function (){
        return function (input,start) {
            start = +start;
            return input.slice(start);
        }
    });;


