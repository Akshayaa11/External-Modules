(function () {
    'use strict';
    angular
        .module('nimbusApp')
        .constant('ExternalModules', {
        	
            DocumentManagement : 'DocumentManagement'
        })
        .run(['$rootScope', 'ExternalModules', function($rootScope, ExternalModules) {
            $rootScope.ExternalModules = ExternalModules;
        }]);
})();
