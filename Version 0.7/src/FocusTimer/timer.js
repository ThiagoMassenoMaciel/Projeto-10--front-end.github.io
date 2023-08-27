import state from "./state.js"
import * as el from './elements.js'

export function CountDown(){

  if(!state.isRunning){
    return
  }
  console.log("begins count down")
  setTimeout(()=>{       CountDown()   } , 1000)   

  //quem esta fazendo oo call back é arrow function
  //arrow function CHAMA DE NOVO CoutDow()
}


export  function UpdateDisplay(minutess, secondss){
  let minutes = minutess ?? state.minutesss
  let seconds = secondss ??  state.secondsss
  
  el.min.textContent = String(minutes).padStart(2, "0")
  el.sec.textContent = String(seconds).padStart(2, "0")
  /*
  none formated numbers 
  
  el.min.textContent = minutes
  el.sec.textContent = seconds

  
  */

}


//comments explaining it of the lines 
/*

import state from "./state.js"
import * as el from './elements.js'

export function CountDown(){
  // ver se a pessoa ainda não apertou no play 
  // ver se o isRunning é == falso
  if(!state.isRunning){
    console.log("|/|/|/|/|/|/|/|/|/|/|/|/|/countdow stop the flow cuz isRunning =  " + state.isRunning)
    return
  }

  console.log("begins count down")
// setTimeout ( wait execute this function at parameter¹ , after delay milisegundos  = 1segundo / 1000)
  setTimeout( CountDown() , 1000)   
}


// sse minutes estiver vazio atribuir para min outra coisa 

export  function UpdateDisplay(minutes, seconds){
  minutes = minutes ?? nullish coalesing operator state.minutes
  seconds = seconds ??  state.seconds
  
  el.min.textContent = String(minutes).padStart(2, "0")
  el.sec.textContent = String(seconds).padStart(2, "0")
  /*
  none formated numbers 
  
  el.min.textContent = minutes
  el.sec.textContent = seconds

}

*/