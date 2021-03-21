var clapSound;
var boomSound;
var channel1 = [];
appStart();
function appStart() {
    window.addEventListener("keypress", onKeyDown);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel);
    getAudioTags();
}
function onPlayChannel() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioTags() {
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}
function onKeyDown(ev) {
    // console.log(ev)
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
}
function playSound(key) {
    // const soundKey = clapSound.dataset.key
    switch (key) {
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 's':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
    }
    clapSound.currentTime = 0;
    clapSound.play();
}
