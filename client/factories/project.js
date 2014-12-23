(function(){
  'use strict';

  var projFactory = angular.module('teamstream');

  projFactory.factory('Project', ['$http', function($http){
    function getAll(){
      return $http.get('/projects');
    }

    function getStreams(pid){
      return $http.get('/projects/'+pid+'/streams');
    }

    function getSegments(sid){
      return $http.get('/projects/'+sid+'/segments');
    }

    function createStream(stream){
      return $http.post('/project/stream/create', stream);
    }

    function createSegment(segment){
      return $http.post('/project/segment/create', segment);
    }

    function createReply(reply){
      return $http.post('/project/reply/create', reply);
    }

    return {getAll: getAll, getStreams: getStreams, getSegments: getSegments, createStream: createStream, createSegment: createSegment, createReply: createReply};
  }]);
})();
