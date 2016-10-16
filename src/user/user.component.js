'use strict';


angular.module('oscra-ui.user').component('userinfo', {
    bindings: {
        user: '='
    },
    template: require('./componentTemplate/userAllInfo.html'),
    controller: function userInfoController(){
        //console.log(this.user)
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
    //template: angular.element(document.querySelector('#md-table-template')).html(),
    template: require('./componentTemplate/tableTemplate.html'),
    controller: function mdTableController($scope,$filter) {
        var vm=this;
        console.log('headers '+vm.headers[0].field);
        console.log('content '+vm.content);
        console.log('sortable '+vm.sortable[0]);
        console.log('filters '+vm.filters);
        console.log('custom-class '+vm.customClass);
        console.log('thumbs '+vm.thumbs);
        console.log('count '+vm.count);

         var orderBy = $filter('orderBy');
         vm.tablePage = 0;
         vm.nbOfPages = function () {
            return Math.ceil(vm.content.length / vm.count);
         },
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
        /*
        var orderBy = $filter('orderBy');
        $scope.tablePage = 0;
        $scope.nbOfPages = function () {
            return Math.ceil($scope.content.length / $scope.count);
        },
            $scope.handleSort = function (field) {
                if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
            };
        $scope.order = function(predicate, reverse) {
            $scope.content = orderBy($scope.content, predicate, reverse);
            $scope.predicate = predicate;
        };
        $scope.order($scope.sortable[0],false);
        $scope.getNumber = function (num) {
            return new Array(num);
        };
        $scope.goToPage = function (page) {
            $scope.tablePage = page;
        }*/
    }

})
    .filter('startFrom',function (){
        return function (input,start) {
            start = +start;
            return input.slice(start);
        }
    });;


