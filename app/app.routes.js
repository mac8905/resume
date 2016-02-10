angular
    .module('appResume')
    .config(['$routeProvider', AppRouter]);

function AppRouter($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/resume/personal.html',
        controller: 'PersonalController',
        controllerAs: 'personal'
    });
}