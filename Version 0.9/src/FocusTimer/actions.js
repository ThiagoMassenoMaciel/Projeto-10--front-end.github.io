import state from './state.js'
import * as timer from './timer.js'
import * as audio from './sounds.js';
import * as el from './elements.js'

export function toggleRunning(){

    audio.buttonPressAudio.play()

    console.log("ToggleRunning function play-pause") 

    state.isRunning = document.documentElement.classList.toggle('running'); // documentElement 
    console.log('... e disparado a reação ao evento  play-pause: ', state.isRunning)
        /*if u rmv the class    \__ this will return true  
        :  
        false  
        */

        //
        timer.CountDown()
    
}

export function set(){
    console.log("set function")
    console.log('... e disparado a reação ao evento set: ', state.isRunning)
    // ele vai colocar tudo zero span minute e second
    // e permitir que a pessoa digite um novo tempo sp em minutos
    // colocar um limite até 60 
    // atualizar o estado da aplicação 


    el.min.setAttribute('contenteditable', true)
    console.log('botão dos minutos hábil para ser alterado pelo usuário')
    el.min.focus()
    console.log('clicado no botão dos minutos ele vai disparar um focus()')
    console.log('agora vai lá nos events.js criar uma function para ter o capturar evento focus e limpar o texto minutes e chamar esta função pelo index.js')

    // Um bug 
    // -------> clickei no buttoon control play 
    //          clickei no buttoon mode 
    //          clickei no buttoon control pause -> Este não funciona

   

    
// Um bug 
// -------> clickei no buttoon control play 
//          clickei no buttoon mode 
//          clickei no buttoon control pause -> Este não funciona

   
}

export function reset(){

    audio.buttonPressAudio.play()

    console.log("reset function")
    
    state.isRunning = false;
    state.isRunning = document.documentElement.classList.remove('running')

    timer.UpdateDisplay()// it will return the initial value defined per parameter by user 

    console.log('... e disparado a reação ao evento reset: ', state.isRunning)

}

export function toggleMusic(){
    console.log("set function toggle-Music ")
    state.isMute = document.documentElement.classList.toggle('musicON')
    

    console.log('... e disparado a reação ao evento musicON: ', state.isRunning)

    if(state.isMute){
        audio.bg_audio.play()
        return
    }
    audio.bg_audio.pause()
}


/*
                                        #each one of them butons tag data setted as 
                                                                data-action="ToggleRunning"
                                                                data-action="ToggleRunning"
                                                                data-action="set"
                                                                data-action="reset"
                                                                data-action="toggleMusic"
                                                                data-action="toggleMusic"
*/