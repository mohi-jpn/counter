let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  This function creates an <iframe> (and YouTube player)
//  after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'nmiZpYb-0Tw',
    playerVars: {
        'modestbranding': 1,
        'rel': 0,
    },
    host: 'https://www.youtube-nocookie.com',
  });
}
