// Import your dependencies here
import angular from 'angular';

// EXAMPLE
import AdvertisementService from './advertisement.service';

// Add the services to the module
let servicesModule = angular.module('app.services', []);

// EXAMPLE
servicesModule.service('Advertisement', AdvertisementService);

export default servicesModule;