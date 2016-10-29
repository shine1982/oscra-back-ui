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
    controller: function mdCrudTableController($filter, $mdDialog, $scope) {
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
        vm.openOffscreenConfirm = function(element,ev) {
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
        };


    }
})
    .filter('startFrom',function (){
        return function (input,start) {
            start = +start;
            return input.slice(start);
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
    .component('mdSimpleTable',{
        bindings: {
            headers: '=',
            content: '='
        },
        template: require('./componentTemplate/simpleTableTemplate.html'),
        controller: function mdSimpleTableController($mdDialog, $scope, $rootScope) {
            var vm=this;


            vm.addNewElement = function(ev) {
                $mdDialog.show({
                    controller: require('./../../setting/activitytype/create/create'),
                    controllerAs: 'dialog',
                    template: require('./../../setting/activitytype/componentTemplate/activityTypeInfo.html'),
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };

            vm.modifyElement = function(element, ev) {
                $mdDialog.show({
                    controller: require('./../../setting/activitytype/modify/modify'),
                    controllerAs: 'dialog',
                    template: require('./../../setting/activitytype/componentTemplate/activityTypeInfo.html'),
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    locals : {
                        element : element
                    },
                    clickOutsideToClose:true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                })
                    .then(function(answer) {

                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };

            vm.openOffscreenConfirm = function(element,ev) {
                var confirm =  $mdDialog.confirm()
                    .clickOutsideToClose(true)
                    .title('Opening from offscreen')
                    .textContent('Are you sure to delete the type of activity ?')
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
                    $scope.$emit('sendDeleteIdViaSimpleTable', element);
                }, function() {

                });
            };
        }
});


/*
app.directive('showFocus', function($timeout) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.showFocus,
            function (newValue) {
                $timeout(function() {
                    newValue && element.focus();
                });
            },true);
    };
});
*/

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


