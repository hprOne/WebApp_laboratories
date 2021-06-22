var clapSound;
var boomSound;
var kickSound;
var openhatSound;
var channel1 = [];
appStart();
function appStart() {
    window.addEventListener("keypress", onKeyDown);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    var btnPlayA = document.querySelector('#Akey');
    var btnPlayS = document.querySelector('#Skey');
    var btnPlayD = document.querySelector('#Dkey');
    var btnPlayF = document.querySelector('#Fkey');
    btnPlayChannel1.addEventListener('click', onPlayChannel);
    btnPlayA.addEventListener('click', onBtnADown);
    btnPlayS.addEventListener('click', onBtnSDown);
    btnPlayD.addEventListener('click', onBtnDDown);
    btnPlayF.addEventListener('click', onBtnFDown);
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
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
}
function onBtnADown() {
    onKeyDown(new KeyboardEvent('key', { 'key': 'a' }));
}
function onBtnSDown() {
    onKeyDown(new KeyboardEvent('key', { 'key': 's' }));
}
function onBtnDDown() {
    onKeyDown(new KeyboardEvent('key', { 'key': 'd' }));
}
function onBtnFDown() {
    onKeyDown(new KeyboardEvent('key', { 'key': 'f' }));
}
function onKeyDown(ev) {
    //console.log(ev)
    var key = ev.key;
    var time = ev.timeStamp;
    if (ev.key === 'A')
        document.getElementById("#Akey").click();
    else if (ev.key === 'S')
        document.getElementById("#Skey").click();
    else if (ev.key === 'D')
        document.getElementById("#Dkey").click();
    else if (ev.key === 'F')
        document.getElementById("#Fkey").click();
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
        case 'd':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'f':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
    }
    //clapSound.currentTime = 0;
    //clapSound.play();
}
