angular
    .module('appResume')
    .config(['$routeProvider', AppRouter]);

function AppRouter($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/resume/generalInformation.html',
        controller: 'GeneralInformationController',
        controllerAs: 'generalInformation'
    });
    
    $routeProvider.when('/generalInformation', {
        templateUrl: 'views/resume/generalInformation.html',
        controller: 'GeneralInformationController',
        controllerAs: 'generalInformation'
    });
}