angular
    .module('appResume')
    .controller('MainController', ['$timeout', '$http', '$SectionService', MainController]);

function MainController($timeout, $http, $SectionService) {
    var vm = this;
    vm.title = 'Hoja de Vida';
    vm.sectionList = null;
    
    vm.init = function () {
        $timeout(function () {
            vm.setSectionList();
        });
    }
    
    vm.setSectionList = function () {
        $SectionService.getSections().then(
            function (data) {
                if (data !== null) {
                    vm.sectionList = data;
                }
            },
            function (response) {
                console.log("Error: " + response);
            }
        );
    }
}