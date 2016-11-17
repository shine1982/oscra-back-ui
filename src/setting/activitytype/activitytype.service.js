
angular.module('oscra-ui.setting.activitytype').factory('ActivityTypeService', service);

function service(API){

    var ACTIVITYTYPES = 'activitytypes/';

    function list(callBack) {
        API.get(ACTIVITYTYPES+'all', null, callBack);
    }

    function listCategoryAbsence(category, callBack){
        API.get(ACTIVITYTYPES+'/absence/all?category='+category, null, callBack);
    }

    function create(activityType, callBack) {
        API.post(ACTIVITYTYPES+'add', activityType, callBack);
    }

    function remove(activityTypeId, callBack) {
        API.post(ACTIVITYTYPES+'delete?activityTypeId='+activityTypeId, null, callBack);
    }

    function modify(activityType, callBack) {
        API.post(ACTIVITYTYPES+'update', activityType, callBack);
    }

    return {
        list : list,
        listCategoryAbsence: listCategoryAbsence,
        create : create,
        delete : remove,
        modify : modify

    }
}