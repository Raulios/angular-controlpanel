import angular from 'angular';
import GraphsConfig from './graphs.config';
import GraphsCtrl from './graphs.controller';

let graphsModule = angular.module('app.graphs', []);
graphsModule.config(GraphsConfig);
graphsModule.controller('GraphsCtrl', GraphsCtrl);

export default graphsModule;