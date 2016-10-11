'use strict';

require('angular');
require('angular-ui-router');

require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-sanitize');
require('lodash');
require('md-data-table');


require('./../node_modules/md-data-table/dist/md-data-table-style.css');

require('./util/api');


var app = angular.module('oscra-ui',
            ['ui.router','ngMaterial', 'mdDataTable', 'ngSanitize',  //'lodash',
                'oscra-ui.util', 'oscra-ui.headbar', //'oscra-ui.mainpanel',
                'oscra-ui.user', 'oscra-ui.activity']);



require('./headbar/headbar.module');
require('./user/user.module');
require('./activity/activity.module');

