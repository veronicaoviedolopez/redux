import {detect} from 'detect-browser';
const browser = detect();
//Formatea a dos decimales un numero
export const leftPad =time =>  time <10 ? `0${time}` : time

//Asigna formato 00:00 
export const formattedTime = secs => `${ leftPad(Math.floor(secs / 60))}:${ leftPad(Math.floor(secs % 60))}`;


//fullscreen in navigator
export const ExitFullScreen = ()=>{
    switch(browser && browser.name){
        case "firefox":
            document.mozCancelFullScreen();
            break;
        default:
            document.webkitExitFullscreen();
            break;
    }
}

//fullscreen in navigator
export const RequestFullScreen = ctrl =>{
    switch(browser && browser.name){
        case "firefox":
            ctrl.mozRequestFullScreen();
            break;
        default:
            ctrl.webkitRequestFullscreen();
            break;
    }
}

export const isDocumentFullScreen = () =>{
    switch(browser && browser.name){
        case "firefox":
            return document.mozFullScreen;
        default:
            return document.webkitIsFullScreen;
    }
}