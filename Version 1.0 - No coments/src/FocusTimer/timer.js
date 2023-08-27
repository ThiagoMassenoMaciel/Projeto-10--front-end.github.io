import state from "./state.js"
import * as el from './elements.js'
import { reset } from "./actions.js"
import { kichentimer } from "./sounds.js"

export function CountDown(){
  
  if(!state.isRunning){
    return
  }
  console.log("begins count down")
  let minutessss = Number(el.min.textContent)   // 
  let secondssss = Number(el.sec.textContent)
  secondssss -= 1
  if(secondssss < 0 ){
    secondssss = 59;
    minutessss-- 
  }

  if(minutessss < 0){
    
    reset()
    kichentimer.play()
    return 
  }

  UpdateDisplay(minutessss,secondssss);
  setTimeout(()=>{       CountDown()   } , 1000)   
}

export  function UpdateDisplay(minutess, secondss){
  let minutes = minutess ?? state.minutesss
  let seconds = secondss ??  state.secondsss
  
  el.min.textContent = String(minutes).padStart(2, "0")
  el.sec.textContent = String(seconds).padStart(2, "0")

}
