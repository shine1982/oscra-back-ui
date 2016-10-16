'use strict';
/*
* http://codepen.io/anon/pen/XjPprv
* */
module.exports = function controller(UserService, $mdToast, $scope){

    var vm = this;

    init();
    vm.deleteRowCallback = function(rows){
        alert('Are you sure to delete the selected items ?');
        $mdToast.show(
            $mdToast.simple()
                .content('Deleted row id(s): '+rows)
                .hideDelay(3000)
        );
    };

    function init() {
        UserService.list(function (response) {
            //console.log(response.data)
            vm.users = response.data;
        })
    }
        vm.toggleSearch = false;
        vm.headers = [
            {
                name:'',
                field:'thumb'
            },{
                name: 'Name',
                field: 'name'
            },{
                name:'Description',
                field: 'description'
            },{
                name: 'Last Modified',
                field: 'last_modified'
            }
        ];
        vm.content = [
            {
                thumb:'https://lh3.googleusercontent.com/-5NfcdlvGQhs/AAAAAAAAAAI/AAAAAAAAABY/ibGrApGYTuQ/photo.jpg',
                name: 'Bruno Mars',
                description: 'Human',
                last_modified: 'Jun 5, 2014'
            },{
                thumb:'http://www.otakia.com/wp-content/uploads/V_1/article_3573/7405.jpg',
                name: 'AT-AT',
                description: 'Robot',
                last_modified: 'Jun 5, 2014'
            },{
                thumb:'https://speakerdata.s3.amazonaws.com/photo/image/774492/Mark-Ronson-r24.jpg',
                name: 'Mark Ronson',
                description: 'Human',
                last_modified: 'Jun 5, 2014'
            },{
                thumb:'http://25.media.tumblr.com/61ebf04c3cc7a84944aa0246e902f2a7/tumblr_mm35b87dGz1qmwrnuo1_1280.jpg',
                name: 'Daft Punk',
                description: 'Human-Robot',
                last_modified: 'Jun 5, 2014'
            },{
                thumb:'http://thatgrapejuice.net/wp-content/uploads/2014/03/lady-gaga-that-grape-juice-televisionjpg.jpg',
                name: 'Lady Gaga',
                description: 'Undefined',
                last_modified: 'Jun 5, 2014'
            }
        ];
        vm.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
        vm.sortable = ['name', 'description', 'last_modified'];
        vm.thumbs = 'thumb';
        vm.count = 3;


};