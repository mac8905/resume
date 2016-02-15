angular
    .module('appResume')
    .config(['$routeProvider', AppRouter]);

function AppRouter($routeProvider) {
    $routeProvider.when('/academicTraining', {
        templateUrl: 'views/resume/academicTraining.html',
        controller: 'AcademicTrainingController',
        controllerAs: 'actr'
    });
    
    $routeProvider.when('/familyInformation', {
        templateUrl: 'views/resume/familyInformation.html',
        controller: 'FamilyInformationController',
        controllerAs: 'fain'
    });
    
    $routeProvider.when('/generalInformation', {
        templateUrl: 'views/resume/generalInformation.html',
        controller: 'GeneralInformationController',
        controllerAs: 'gein'
    });
    
    $routeProvider.when('/profile', {
        templateUrl: 'views/resume/profile.html',
        controller: 'ProfileController',
        controllerAs: 'prof'
    });
    
    $routeProvider.when('/workExperience', {
        templateUrl: 'views/resume/workExperience.html',
        controller: 'WorkExperienceController',
        controllerAs: 'woex'
    });
    
    $routeProvider.otherwise({ 
        redirectTo: '/generalInformation' 
    });
}