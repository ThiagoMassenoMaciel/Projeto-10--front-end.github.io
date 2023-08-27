import State from './state.js'

import * as Events from './events.js'

import * as timer from './timer.js'

export function starts(min, sec){
    
    console.log("index.js  ----starts()")
//Update the value State of aplication 

    State.minutes= min;
    State.seconds= sec;
// if ou  put parameters it will update new number | if not -> will display the parameters assignment on a file main 
    timer.UpdateDisplay()
    
    console.log(State);
    
    Events.registerControls();
}