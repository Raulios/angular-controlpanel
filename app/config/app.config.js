function AppConfig($stateProvider, $urlRouterProvider, $qProvider) {
  'ngInject';

  $qProvider.errorOnUnhandledRejections(false);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;