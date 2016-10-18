'use strict';

angular.module('oscra-ui.table').component('mdCrudTable',{
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
/*
<md-radio-table headers="craList.headers" content="craList.content" sortable="craList.sortable"
custom-class="craList.custom"  count="craList.count"
listurl="root.cra">
 </md-radio-table>
  */
    .component('mdRadioTable',{
        bindings: {
            headers: '=',
            content: '=',
            sortable: '=',
            customClass: '=',
            count: '=',
            listurl: '@'
            //modifyurl : '@',
            //deleteurl : '@',
            //idkey : '@'
        },
        template: require('./componentTemplate/radioTableTemplate.html'),
        controller: function mdRadioTableController() {
            var vm=this;
            console.log('vm headers in radion controller' + vm.headers)
            console.log(vm.content)
            console.log('vm content in radio controller '+ vm.content)
            console.log('vm sortable in radio controller '+ vm.sortable)
            console.log('vm customClass in radio controller '+ vm.customClass)
            console.log('vm count in radio controller '+ vm.count)
            console.log('vm listurl in radio controller '+ vm.listurl)
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


