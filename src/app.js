'use strict';

require('angular');
require('angular-ui-router');

require('angular-animate');
require('angular-aria');
require('angular-material');
//require('angular-sanitize');
//require('lodash');
//require('angular-smart-table');
//require('md-data-table');


//require('./../node_modules/md-data-table/dist/md-data-table-style.css');

require('./util/api');


var app = angular.module('oscra-ui',
            ['ui.router','ngMaterial',    //'lodash', 'mdDataTable', 'smart-table', 'ngSanitize',
                'oscra-ui.util', 'oscra-ui.headbar', 'oscra-ui.table',
                'oscra-ui.user', 'oscra-ui.cra']);



require('./headbar/headbar.module');
require('./common/table/table.module');
require('./user/user.module');
require('./cra/cra.module');


