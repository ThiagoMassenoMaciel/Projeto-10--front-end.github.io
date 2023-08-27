import state from './state.js'
import * as timer from './timer.js'
import * as audio from './sounds.js';
import * as el from './elements.js'

export function toggleRunning(){  
    audio.buttonPressAudio.play()
    state.isRunning = document.documentElement.classList.toggle('running'); 
    
    timer.CountDown()
}

export function set(){
    el.min.setAttribute('contenteditable', true)
    el.min.focus()
}

export function reset(){

    audio.buttonPressAudio.play()
    state.isRunning = false;
    state.isRunning = document.documentElement.classList.remove('running')
    timer.UpdateDisplay()
 
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('musicON')
    if(state.isMute){
        audio.bg_audio.play()
        return
    }
    audio.bg_audio.pause()
}