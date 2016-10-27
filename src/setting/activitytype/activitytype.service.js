
angular.module('oscra-ui.user').factory('UserService', service);

function service(API){

    var ACTIVITYTYPES = 'activitytypes/';

    function list(callBack) {
        API.get(ACTIVITYTYPES+'all', null, callBack);
    }

    function create(user, callBack) {
        API.post(ACTIVITYTYPES+'add', user, callBack);
    }
/*
    function modify(user, callBack) {
        API.post(ACTIVITYTYPES+'update', user, callBack);
    }

    function remove(userId, callBack) {
        API.post(ACTIVITYTYPES+'delete?userId='+userId, null, callBack);
    }

    function findById(userId, callBack) {
        API.get(ACTIVITYTYPES+'findById?userId='+userId, null, callBack);
    }
*/

    return {
        list : list,
        create : create/*
        modify : modify,
        delete : remove,
        findById : findById*/
    }
}