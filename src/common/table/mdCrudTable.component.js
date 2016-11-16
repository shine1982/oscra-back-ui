'use strict';

angular.module('oscra-ui.table').component('mdCrudTable',{
    bindings: {
        currentpage : '=',
        headers: '=',
        content: '=',
        sortable: '=',
        filters: '=',
        customClass: '=',
        count: '=',
        statusflag: '=',
        listurl: '@',
        modifyurl : '@',
        deleteurl : '@',
        idkey : '@'
    },
    template: require('./componentTemplate/crudTableTemplate.html'),
    controller: function mdCrudTableController($filter, $mdDialog, $scope) {
        var vm=this;
        var orderBy = $filter('orderBy');
       // vm.order(vm.sortable[0],false);
//export
        vm.tablePage = 0;
        vm.nbOfPages = nbOfPages;
        vm.loadMore = loadMore;
        vm.getNumber = getNumber;
        vm.goToPage = goToPage;
        vm.handleSort = handleSort;
        vm.order = order;

        vm.openOffscreenConfirm = openOffscreenConfirm;



//declaration
        function loadMore(){
            vm.currentpage+=1;
            $scope.$emit('sendCurrentPage', vm.currentpage);
        }

        function nbOfPages(){
            return Math.ceil(vm.content.length / vm.count);
        }

        function getNumber (num) {
            return new Array(num);
        }

        function handleSort (field) {
            if (vm.sortable.indexOf(field) > -1) { return true; } else { return false; }
        }

        function order (predicate, reverse) {
            vm.content = orderBy(vm.content, predicate, reverse);
            vm.predicate = predicate;
        }

        function openOffscreenConfirm (element,ev) {
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
                $scope.$emit('sendDeleteId', element);
            }, function() {

            });
        }

        function goToPage (page) {
            vm.tablePage = page;
        }

    }
})

/*
 .directive('showFocus', function($timeout) {
 return function(scope, element, attrs) {
 scope.$watch(attrs.showFocus,
 function (newValue) {
 $timeout(function() {
 newValue && element.focus();
 });
 },true);
 };
 })*/


