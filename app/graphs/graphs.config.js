function GraphsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.graphs', {
    url: '/graphs',
    controller: 'GraphsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'graphs/graphs.html',
    title: 'Graphs',
  });

};

export default GraphsConfig;
