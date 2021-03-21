let clapSound: HTMLAudioElement 
let boomSound: HTMLAudioElement 

const channel1: any[] = [];
appStart();

function appStart(): void{
    window.addEventListener("keypress", onKeyDown);
    const btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel);
    getAudioTags();
}

function onPlayChannel(): void{
    channel1.forEach(sound=> {
        setTimeout(()=> playSound(sound.key), sound.time);
    })
}

function getAudioTags(){
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}

function onKeyDown(ev: KeyboardEvent): void{
    // console.log(ev)

    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push({key, time})
    playSound(key);
}

function playSound(key: string) {
    // const soundKey = clapSound.dataset.key
    switch(key){
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