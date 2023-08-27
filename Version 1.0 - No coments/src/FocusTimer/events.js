import { controls } from "./elements.js"
import * as actions from './actions.js'
import * as el from './elements.js'
import state from "./state.js"
import * as timer from './timer.js'

export function registerControls(){
    controls.addEventListener('click' , (e)=>{ 
        const action= e.target.dataset.action;
        
        if(typeof actions[action] !== "function"){   
            return 
        }
        actions[action]();
    })   
}

export function setminutes(){

    el.min.addEventListener('focus', ()=> el.min.textContent = "" )
    
    el.min.onkeypress = (event) => /\d/.test(event.key)

    el.min.addEventListener('blur', (event)=> {  
        let time = event.currentTarget.textContent  
        time = time > 60 ? 60 : time 

        state.minutesss = time
        state.secondsss = 0 

        timer.UpdateDisplay() 
        el.min.removeAttribute('contenteditable')

    } )
}