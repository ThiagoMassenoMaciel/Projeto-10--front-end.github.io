import state from "./state.js"
import * as el from './elements.js'
import * as timer from './timer.js'


// sse minutes estiver vazio atribuir para min outra coisa 

export  function UpdateDisplay(minutes, seconds){
  minutes = minutes ?? /*nullish coalesing operator*/ state.minutes
  seconds = seconds ??  state.seconds
  
  el.min.textContent = String(minutes).padStart(2, "0")
  el.sec.textContent = String(seconds).padStart(2, "0")
  /*
  none formated numbers 
  
  el.min.textContent = minutes
  el.sec.textContent = seconds

  
  */

}
