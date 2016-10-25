'use strict';

require('angular');
require('angular-ui-router');

require('angular-animate');
require('angular-aria');
require('angular-material');


require('./util/api');


var app = angular.module('oscra-ui',
            ['ui.router','ngMaterial',
                'oscra-ui.util', 'oscra-ui.headbar', 'oscra-ui.table',
                'oscra-ui.user', 'oscra-ui.cra']);


require('./../assets/css/commonCrudTable.css');
require('./../assets/css/loading.css');
require('./../assets/css/headbar.css');
require('./headbar/headbar.module');
require('./common/table/table.module');
require('./user/user.module');
require('./cra/cra.module');



