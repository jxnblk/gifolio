
'use strict';


var app = angular.module('app', []);

var player;

function onYouTubeIframeAPIReady() {
  console.log('G I F O L I O');
  player = new YT.Player('player', {
    height: '75',
    width: '100',
    videoId: 'FATTzbm78cc',
    //videoId: 'iZ8sZXFN6jc',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  console.log('ready :)');
}

app.controller('GifCtrl', ['$scope', '$interval', function($scope, $interval) {

  $scope.player = {
    playing: false
  };
  $scope.currentTime = 0;
  $scope.youtube = player;

  $scope.play = function() {
    if (!player) return false;
    player.playVideo();
    $scope.player.playing = true;
    $scope.youtube = player;
    $interval(function() {
      $scope.currentTime = Math.floor(1000 * player.getCurrentTime());
    }, 200, 0, false);
  };

  $scope.pause = function() {
    player.pauseVideo();
    $scope.player.playing = false;
  };
 
}]);

