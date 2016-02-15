angular
    .module('appResume')
    .controller('AcademicTrainingController', ['$timeout', '$SectionService', AcademicTrainingController]);

function AcademicTrainingController($timeout, $SectionService) {
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