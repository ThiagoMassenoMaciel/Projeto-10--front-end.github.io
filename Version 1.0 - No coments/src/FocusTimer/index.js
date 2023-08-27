import State from './state.js'

import * as Events from './events.js'

import * as timer from './timer.js'

export function starts(min, sec){
    
    console.log("index.js  ----starts()")

    State.minutesss= min;
    State.secondsss= sec;
    
    timer.UpdateDisplay()
    
    console.log(State);
    
    Events.setminutes();
    Events.registerControls();
}