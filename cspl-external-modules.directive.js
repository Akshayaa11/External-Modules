(function() {
    'use strict';
    angular
        .module('csplExternalModules')
        .directive('csplModules', ['$compile', 'ExternalModules',
                                         function($compile, ExternalModules) {

            function linkFunction(scope, iElement, iAttrs) {

                var templateContent = '';

                angular.forEach(scope.modules, function(module){
                    if(module == ExternalModules.DocumentManagement){
                        templateContent = templateContent + '<cspl-document-upload></cspl-document-upload>';
                    }
                    else if(module == 'Search'){
                        templateContent = templateContent + '<cspl-search ng-model=\'input\'></cspl-search>'
                    }
                })

                var template = $compile(templateContent)(scope);
                iElement.after(template);

            }

            return {
                restrict: 'E',
                scope: {
                    modules: '=',
                },
                link: linkFunction,
                transclude: true
            };
        }]);
})();
