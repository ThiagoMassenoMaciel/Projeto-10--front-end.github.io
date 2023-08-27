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
  setTimeout(()=>{  console.log('Executed function after delay 1second when the isRunning = ' + state.isRunning) }
  ,
  1000)   
}


export function CountDownRECURSIVE(){
  // ver se a pessoa ainda não apertou no play 
  // ver se o isRunning é == falso
  if(!state.isRunning){
    console.log("|/|/|/|/|/|/|/|/|/|/|/|/|/countdow stop the flow cuz isRunning =  " + state.isRunning)
    return
  }
  
  console.log("begins count down")
  // setTimeout ( wait execute this function at parameter¹ , after delay milisegundos  = 1segundo / 1000)
  // will call again after 1 seconds until tge user click again on the buton PAUSE 
  
  setTimeout( CountDownRECURSIVE()  ,
  1000)   
}
