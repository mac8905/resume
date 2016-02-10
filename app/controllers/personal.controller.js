angular
    .module('appResume')
    .controller('PersonalController', [PersonalController]);

function PersonalController() {
    var vm = this;
    vm.name = 'Miguel Antonio Caro Ocampo';
}