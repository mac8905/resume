angular
    .module('appResume')
    .controller('GeneralInformationController', ['$timeout', '$SectionService', '$GeneralInformationService', GeneralInformationController]);

function GeneralInformationController($timeout, $SectionService, $GeneralInformationService) {
    var vm = this;
    vm.section = null;
    vm.generalInformation = null;
    
    vm.init = function () {
        $timeout(function () {
            vm.setSection();
            vm.setGeneralInformation();
        }, 50);
    }
    
    vm.setSection = function () {
        vm.section = $SectionService.section;
    }
    
    vm.setGeneralInformation = function () {
        $GeneralInformationService.getGeneralInformation().then(
            function (data) {
                if (data !== null) {
                    console.log(data);
                    vm.generalInformation = data;
                }
            },
            function (response) {
                console.log("Error: " + response);
            }
        );
    }
}