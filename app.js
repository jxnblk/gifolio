// Youtube player app


var app = angular.module('app', []);

function onYouTubeIframeAPIReady() {
  console.log('player api ready');
  player = new YT.Player('player', {
    height: '400',
    width: '300',
    videoId: 'FATTzbm78cc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  console.log('player ready');
}
function onPlayerStateChange() {
}

app.controller('GifCtrl', ['$scope', function($scope) {
  $scope.player = player;
  //$scope.currentTime = $scope.player.getCurrentTime() || null;

  $scope.play = function() {
    console.log('play', player);
    player.playVideo();
  };

  //$scope.player.playing = player.getPlayerState() == 1 ? true : false;
 
}]);
