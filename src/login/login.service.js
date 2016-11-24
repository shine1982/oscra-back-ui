
angular.module('oscra-ui.login').factory('LoginService', service);

function service(API){

    function signin(username, password, callBack) {
        API.post('login?username='+username+'&password='+password, null, callBack);
    }

    function signout( callBack) {
        API.post('logout', null, callBack);
    }

    return {
        signin  : signin,
        signout : signout
    }
}