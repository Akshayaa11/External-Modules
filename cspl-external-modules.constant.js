(function () {
    'use strict';
    angular
        .module('csplExternalModules')
        .constant('ExternalModules', {
        	
            DocumentManagement : 'DocumentManagement'
        })
        .run(['$rootScope', 'ExternalModules', function($rootScope, ExternalModules) {
            $rootScope.ExternalModules = ExternalModules;
        }]);
})();
