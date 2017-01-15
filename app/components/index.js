// Import your dependencies here
import angular from 'angular';

// EXAMPLES
import AddAdModal from './add-ad-modal.component';
// import ExampleDirective from './example.directive';

// Add the components/directives to the module
let componentsModule = angular.module('app.components', []);

// EXAMPLES
componentsModule.component('addAdModal', AddAdModal);
// componentsModule.directive('exampleDirective', ExampleDirective);

export default componentsModule;