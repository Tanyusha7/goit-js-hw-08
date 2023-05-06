import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onStoragePlay, 1000));
console.log('played the video!');

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function onStoragePlay({ seconds }) {
  // duration: 61.857;
  // percent: 0.049;
  // seconds: 3.034;
  // console.log(e);

  localStorage.setItem('videoplayer-current-time', seconds);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
