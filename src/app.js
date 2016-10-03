'use strict';

require('angular');
require('angular-ui-router');
require('./util/api');

var app = angular.module('oscra-ui', ['ui.router','oscra-ui.util']);

require('./user/user.module');
