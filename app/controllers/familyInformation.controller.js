angular
    .module('appResume')
    .controller('FamilyInformationController', ['$timeout', '$SectionService', FamilyInformationController]);

function FamilyInformationController($timeout, $SectionService) {
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