import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var second;


    player.on("play", function() {
        console.log('played the video!');

    });

    // player.getCurrentTime().then(function(seconds) {
    //     seconds = second;
    // }).catch(function(error) {
    //     // an error occurred
    // });

    player.on('pause',function(){
        console.log('stoped the video!');
        player.getCurrentTime().then(function(seconds) {
            console.log( "el video paro en el segundo: ",seconds);
            localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
        }).catch(function(error) {
            // an error occurred
        });
        
    });

    player.getVideoTitle().then(function(title) {
        console.log("title:", title);
    });


    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });