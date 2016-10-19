
angular.module('oscra-ui.cra')
    .factory('ActivityService', activityService)
    .factory('CraService',craService);

function craService(API){
    var CRAS = 'cras/';

    function list(providerId, starttime, endtime, callBack) {
        API.get(CRAS+'user/all?providerId='+providerId+'&start='+starttime+'&end='+endtime, null, callBack);
    }
/*
    function create(activity, userId, callBack) {
        API.post(CRAS+'add?userId='+userId, activity, callBack);
    }

    function modify(activity, userId, callBack) {
        API.post(CRAS+'update?userId='+userId, activity, callBack);
    }

    function remove(activityId, callBack) {
        API.post(CRAS+'delete?activityId='+activityId, null, callBack);
    }
*/
    function findById(craId, callBack) {
        API.get(CRAS+'findById?craId='+craId, null, callBack);
    }

    return {
        list : list,
        /*
        create : create,
        modify : modify,
        delete : remove,*/
        findById : findById
    }
}

function activityService(API){

    var ACTIVITIES = 'activities/';

    function list(userId, callBack) {
        API.get(ACTIVITIES+'all?userId='+userId, null, callBack);
    }

    function create(activity, userId, callBack) {
        API.post(ACTIVITIES+'add?userId='+userId, activity, callBack);
    }

    function modify(activity, userId, callBack) {
        API.post(ACTIVITIES+'update?userId='+userId, activity, callBack);
    }

    function remove(activityId, callBack) {
        API.post(ACTIVITIES+'delete?activityId='+activityId, null, callBack);
    }

    function findById(activityId, callBack) {
        API.get(ACTIVITIES+'findById?activityId='+activityId, null, callBack);
    }


    return {
        list : list,
        create : create,
        modify : modify,
        delete : remove,
        findById : findById
    }
}