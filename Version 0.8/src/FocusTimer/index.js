//When ou starts from file main.js callling the starts(parameter¹, parameter²)
// first this file will atualizar os valores da propriedade state 
// depois é que vai exibir o valor dentro do state para o user 

import State from './state.js'

import * as Events from './events.js'

import * as timer from './timer.js'

export function starts(min, sec){
    
    console.log("index.js  ----starts() initializado para o valor to estado da aplcação minutos e segundos")
    //Update the value State of aplication 

    State.minutesss= min;
    State.secondsss= sec;
    // if ou  put parameters it will update new number | if not -> will display the parameters assignment on a file main 
    timer.UpdateDisplay()
    
    console.log(State);
    
    Events.registerControls();
    Events.setminutes()
}