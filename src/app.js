'use strict';

require('angular');
require('angular-ui-router');

require('angular-animate');
require('angular-aria');
require('angular-material');


require('./util/api');


var app = angular.module('oscra-ui',
            ['ui.router','ngMaterial',
                'oscra-ui.util',  'oscra-ui.table', //'oscra-ui.layout',
                'oscra-ui.user', 'oscra-ui.cra', 'oscra-ui.setting',
                'oscra-ui.absence']);


require('./../assets/css/commonCrudTable.css');
require('./../assets/css/loading.css');
require('./../assets/css/headbar.css');
require('./../node_modules/angular-material/angular-material.css');
require('./../assets/css/headbar.css');
//require('./layout/layout.module');
require('./common/table/table.module');
require('./user/user.module');
require('./cra/cra.module');
require('./setting/setting.module');
require('./absence/absence.module');
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
        .primaryPalette('blue') // specify primary color, all
    // other color intentions will be inherited
    // from default
})
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('beforelogin', {
            url: '/',
            views:{
                headbar : {
                    template: require('./layout/headbar/beforelogin.html'),
                    controller: require('./layout/headbar/beforelogin.controller'),
                    controllerAs: 'headbarCtrl'
                },
                mainpanel:{
                    template: require('./layout/mainpanel/beforelogin.html'),
                    controller: require('./layout/mainpanel/beforelogin.controller'),
                    controllerAs: 'mainpanelCtrl'
                },
                footer:{
                    template: require('./layout/footer/footer.html'),
                    controller: function(){

                    }
                    //controllerAs: 'headbarCtrl'
                }
            }
        })
        .state('root',{
            url: '/dashboard',
            views:{
                headbar : {
                    template: require('./layout/headbar/afterlogin.html'),
                    controller: require('./layout/headbar/afterlogin.controller'),
                    controllerAs: 'headbarCtrl'
                },
                mainpanel:{
                    template: require('./layout/mainpanel/afterlogin.html'),
                    controller: require('./layout/mainpanel/afterlogin.controller'),
                    controllerAs: 'mainpanelCtrl'
                },
                footer:{
                    template: require('./layout/footer/footer.html'),
                    controller: function(){

                    }
                    //controllerAs: 'headbarCtrl'
                }
            }
        })
    $urlRouterProvider.otherwise('/');
});
 app.directive('sidenavPushIn', function () {
     return {
         restrict: 'A',
         require: '^mdSidenav',
         link: function ($scope, element, attr, sidenavCtrl) {
             var body = angular.element(document.body);
             body.addClass('md-sidenav-push-in');
             var cssClass = (element.hasClass('md-sidenav-left') ? 'md-sidenav-left' : 'md-sidenav-right') + '-open';
             var stateChanged = function (state) {
                 body[state ? 'addClass' : 'removeClass'](cssClass);
             };
             // overvwrite default functions and forward current state to custom function
             angular.forEach(['open', 'close', 'toggle'], function (fn) {
                 var org = sidenavCtrl[fn];
                 sidenavCtrl[fn] = function () {
                     var res = org.apply(sidenavCtrl, arguments);
                     stateChanged(sidenavCtrl.isOpen());
                     return res;
                 };
             });
         }
     }
 });




