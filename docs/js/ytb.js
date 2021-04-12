let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  This function creates an <iframe> (and YouTube player)
//  after the API code downloads.
let player;
let videotime=0;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: VIDEO_ID,
    playerVars: {
        'modestbranding': 1,
        'playsinline': 1,
        'rel': 0,
    },
    host: 'https://www.youtube-nocookie.com',
    events: {
      'onStateChange': onPlayerStateChange
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data == 1) {
    function updateTime() {
      let oldTime = videotime;
      if (player && player.getCurrentTime) {
        videotime = player.getCurrentTime().toFixed(3);
      }
      if (videotime !== oldTime) {
        document.getElementById('playerTime').innerHTML = videotime;
      }
    }
    timeupdater = setInterval(updateTime, 100);
  }
}
