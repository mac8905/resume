angular
    .module('appResume')
    .controller('GeneralInformationController', [GeneralInformationController]);

function GeneralInformationController() {
    var vm = this;
    vm.name = 'Miguel Antonio Caro Ocampo';
}