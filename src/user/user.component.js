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
    bindings:{
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
        console.log(vm.headers[0].field)
        console.log(vm.content)
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

});


