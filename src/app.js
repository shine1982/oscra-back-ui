'use strict';

require('angular');
require('angular-ui-router');

require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-sanitize');
require('lodash');
require('md-data-table');

require('angular-material-sidemenu')
//require('md-data-table-templates');
require('./../node_modules/md-data-table/dist/md-data-table-style.css');

require('./util/api');


var app = angular.module('oscra-ui',
            ['ui.router','ngMaterial', 'mdDataTable', 'ngSanitize', 'ngMaterialSidemenu', //'lodash',
                'oscra-ui.util', 'oscra-ui.user',
                'oscra-ui.headbar', 'oscra-ui.mainpanel']);



require('./headbar/headbar.module');
require('./mainpanel/mainpanel.module');
require('./user/user.module');

