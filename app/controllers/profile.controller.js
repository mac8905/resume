angular
    .module('appResume')
    .controller('ProfileController', ['$timeout', '$SectionService', ProfileController]);

function ProfileController($timeout, $SectionService) {
    var vm = this;
    vm.section = null;
    
    vm.init = function () {
        $timeout(function () {
            vm.setSection();
        }, 50);
    }
    
    vm.setSection = function () {
        vm.section = $SectionService.section;
    }
}