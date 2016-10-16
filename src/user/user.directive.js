'use strict';

/*
angular.module('oscra-ui.user').directive('mymdTable', function () {
    return {
        restrict: 'E',
        scope: {
            headers: '=',
            content: '=',
            sortable: '=',
            filters: '=',
            customClass: '=customClass',
            thumbs:'=',
            count: '='
        },
        controller: function ($scope,$filter,$window) {
            var vm=this;
            console.log('headers '+$scope.headers[0].field);/*
            console.log('content '+vm.content);
            console.log('sortable '+vm.sortable[0]);
            console.log('filters '+vm.filters);
            console.log('custom-class '+vm.customClass);
            console.log('thumbs '+vm.thumbs);
            console.log('count '+vm.count);

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
            };
        },
        template: require('./componentTemplate/tableTemplate.html')
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
    })

    .filter('startFrom',function (){
        return function (input,start) {
            start = +start;
            return input.slice(start);
        }
    });
*/