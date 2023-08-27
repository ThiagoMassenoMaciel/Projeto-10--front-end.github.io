import state from './state.js'

export function toggleRunning(){          
    console.log("ToggleRunning function") 

    state.isRunning = document.documentElement.classList.toggle('running'); // documentElement 
    console.log('... e disparado a reação ao evento')
        /*if u rmv the class    \__ this will return true  
        :  
        false  
        */
}

export function set(){
    console.log("set function")

    state.isRunning = document.documentElement.classList.remove('running')
// Um bug 
// -------> clickei no buttoon control play 
//          clickei no buttoon mode 
//          clickei no buttoon control pause -> Este não funciona

   
}

export function reset(){
    console.log("set function")

    state.isRunning = false;
    state.isRunning = document.documentElement.classList.remove('running')
}

export function toggleMusic(){
    console.log("set function toggle-mode ")
    state.isMute = document.documentElement.classList.toggle('musicON')
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