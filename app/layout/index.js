import angular from 'angular';
import AppHeader from './header.component';
import AppSidenav from './sidenav.component';
import AppFooter from './footer.component';

let layoutModule = angular.module('app.layout', []);

layoutModule.component('appHeader', AppHeader);
layoutModule.component('appSidenav', AppSidenav);
layoutModule.component('appFooter', AppFooter);

export default layoutModule;