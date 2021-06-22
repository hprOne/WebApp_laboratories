let clapSound: HTMLAudioElement 
let boomSound: HTMLAudioElement 
let kickSound: HTMLAudioElement 
let openhatSound: HTMLAudioElement 

const channel1: any[] = [];
appStart();

function appStart(): void{
    window.addEventListener("keypress", onKeyDown);
    const btnPlayChannel1 = document.querySelector('#playChannel1');
    const btnPlayA = document.querySelector('#Akey');
    const btnPlayS = document.querySelector('#Skey');
    const btnPlayD = document.querySelector('#Dkey');
    const btnPlayF = document.querySelector('#Fkey');
    btnPlayChannel1.addEventListener('click', onPlayChannel);
    btnPlayA.addEventListener('click', onBtnADown);
    btnPlayS.addEventListener('click', onBtnSDown);
    btnPlayD.addEventListener('click', onBtnDDown);
    btnPlayF.addEventListener('click', onBtnFDown);
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
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
}

function onBtnADown(){
    onKeyDown(new KeyboardEvent('key',{'key':'a'}));
}
function onBtnSDown(){
    onKeyDown(new KeyboardEvent('key',{'key':'s'}));    
}
function onBtnDDown(){
    onKeyDown(new KeyboardEvent('key',{'key':'d'}));    
}
function onBtnFDown(){
    onKeyDown(new KeyboardEvent('key',{'key':'f'}));   
}

function onKeyDown(ev: KeyboardEvent): void{
    //console.log(ev)

    const key = ev.key;
    const time = ev.timeStamp;
    if(ev.key === 'A')
        document.getElementById("#Akey").click(); 
    else
    if(ev.key === 'S')
        document.getElementById("#Skey").click();
    else
    if(ev.key === 'D')
        document.getElementById("#Dkey").click();
    else
    if(ev.key === 'F')
        document.getElementById("#Fkey").click();
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