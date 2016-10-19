'use strict';

angular.module('oscra-ui.table').component('mdCrudTable',{
    require: {

    },
    bindings: {
        headers: '=',
        content: '=',
        sortable: '=',
        filters: '=',
        customClass: '=',
        count: '=',
        listurl: '@',
        modifyurl : '@',
        deleteurl : '@',
        idkey : '@'
    },
    template: require('./componentTemplate/crudTableTemplate.html'),
    controller: function mdCrudTableController($filter, $mdDialog) {
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
        vm.openOffscreenConfirm = function(ev) {
            var confirm =  $mdDialog.confirm()
                .clickOutsideToClose(true)
                .title('Opening from offscreen')
                .textContent('Are you sure to delete the user ?')
                .ariaLabel('Offscreen Demo')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('Cancel')
                // Or you can specify the rect to do the transition from
                .openFrom({
                    top: -50,
                    width: 30,
                    height: 80
                })
                .closeTo({
                    left: 1500
                });
            $mdDialog.show(confirm).then(function() {
                alert('delete')
            }, function() {

            });
        };
    }
})

    .component('mdRadioTable',{
        bindings: {
            headers: '=',
            content: '=',
            sortable: '=',
            filters: '=',
            customClass: '=',
            count: '=',
            listurl: '@'
            //selectedId: '='
        },
        template: require('./componentTemplate/radioTableTemplate.html'),
        //template: require('./componentTemplate/radioGroupTemplate.html'),
        controller: function mdRadioTableController($filter,$scope) {

            var vm=this;
            console.log(vm.headers)
            console.log(vm.content)
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
/*
            $scope.$watch(function(scope) { return vm.selectedId }, function(){
                alert(vm.selectedId)
                /*
                if (vm.selectedId > 0)
                    vm.secondLocked = false;

            })
 */
        }
    })
    .filter('startFrom',function (){
        return function (input,start) {
            start = +start;
            return input.slice(start);
        }
    })

//UNCOMMENT BELOW TO BE ABLE TO RESIZE COLUMNS OF THE TABLE
/*
 app.directive('mdColresize', function ($timeout) {
 return {
 restrict: 'A',
 link: function (scope, element, attrs) {
 scope.$evalAsync(function () {
 $timeout(function(){ $(element).colResizable({
 liveDrag: true,
 fixed: true

 });},100);
 });
 }
 }
 });
 */


