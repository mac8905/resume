angular
    .module('appResume')
    .controller('MainController', ['$timeout', '$http', '$location', '$SectionService', MainController]);

function MainController($timeout, $http, $location, $SectionService) {
    var vm = this;
    vm.title = 'Hoja de Vida';
    vm.section = null;
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
                    vm.go(vm.sectionList[0]);
                }
            },
            function (response) {
                console.log("Error: " + response);
            }
        );
    }
    
    vm.go = function (section) {
        $SectionService.section = section;
        $location.path(section.name);
    }
}