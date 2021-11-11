(function () {
    'use strict';
    angular
        .module('csplExternalModulesModule')
        .constant('ExternalModules', {
        	
            DocumentManagement : 'DocumentManagement'
        })
        .run(['$rootScope', 'ExternalModules', function($rootScope, ExternalModules) {
            $rootScope.ExternalModules = ExternalModules;
        }]);
})();
