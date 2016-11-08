describe('TestUserListController', function () {

    var controller = null;
    $scope = null;

    beforeEach(function () {
        module('oscra-ui');
        module('oscra-ui.user');
    });

    /*
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
     */
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('userList', {
            $scope: $scope
        });
    }));



    it('initially has a greeting', function () {
        //var $scope = {};
        //var controller = $controller('userList', { $scope: $scope });
        expect($scope.greeting).toBe("Hello, World!")
        //assert.equal($scope.greeting, "Hello, World!");
    });
/*
    it('clicking the button changes the greeting', function () {
        $scope.newText = "Hi!";
        $scope.changeGreeting();
        assert.equal($scope.greeting, "Hi!");
    });
*/
});