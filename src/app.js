'use strict';

require('angular');
require('angular-ui-router');
require('./util/api');

require('angular-material');
require('angular-animate');
require('angular-aria');


var app = angular.module('oscra-ui',
            ['ui.router','ngMaterial',
                'oscra-ui.util', 'oscra-ui.user','oscra-ui.headbar']);

require('./user/user.module');
require('./headbar/headbar.module');
