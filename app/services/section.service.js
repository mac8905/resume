angular
    .module('appResume')
    .service('$SectionService', SectionService);

function SectionService($http, $q) {
    return ({
        getSections: getSections
    });
    
    function getSections() {
        var request = $http({
            data: {all: 'all'},
            method: "POST",
            url: 'controller/section.class.php'
        });
        
        return (request.then(handleSuccess, handleError));
    }
    
    // ---
    // PRIVATE METHODS.
    // ---
    // I transform the error response, unwrapping the application dta from
    // the API response payload.
    function handleError(response) {
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (
            !angular.isObject(response.data)) {
            return ($q.reject("An unknown error occurred:" + response));
        }
        // Otherwise, use expected error message.
        return ($q.reject(response.data));
    }
    
    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess(response) {
        return (response.data);
    }
}