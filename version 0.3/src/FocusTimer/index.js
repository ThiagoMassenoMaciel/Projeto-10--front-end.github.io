import State from './state.js'

import * as Events from './events.js'

export function starts(min, sec){
    
    console.log("index.js  ----starts()")

    State.minutes= min;
    State.seconds= sec;
 
    console.log(State);
    
    Events.registerControls();
}