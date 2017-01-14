function AppConfig($stateProvider, $urlRouterProvider, $qProvider, ChartJsProvider) {
  'ngInject';

  $qProvider.errorOnUnhandledRejections(false);

  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;