import { controls } from "./elements.js"
import * as actions from './actions.js'

export function registerControls(){
    console.log('registrado o evento ...')

    controls.addEventListener('click' , (e)=>{ 
        
        console.log("--addEventListenner")  
        const action= e.target.dataset.action;

        if(actions[action] !== "function"){
            console.log("You didnt click on the button that has the data-action")
            return 
        }
       //console.log(action)
         //console.log(actions)
   //     console.log(actions.toggleRunning())

       // actions["toggleRunning"]()   // this way desnt show the return of function undefined 
        
       // dont understand   actions[action]
//DE A CORDORDO COM O VALOR QUE TIVER DENTRO DA TAG DATASE.ACTION ESTARA CHAMANDO UMA FUNÇÃO DO ACTIONS 
//   POIS CADA BOTÃO REFERE-SE A UMA FUNÇÃO DIFERENTE 
        actions[action]();
// target its like the element from html that have some event added

/* it means  when you decide to display the value from atribute   (looks like a property on a object)
                                                        action                              
                                           INTO THE    __/
                                    dataset
                        INTO THE  ___/
               target___/
 e   INTO THE___/

 AFTER you KNOW THE VALUE YOU PUT iN THE data-action ="HTML INTO THE TAG " 
           if was clicked a tag on a screen by user that have  data-action ="SomeValue" 
                show the SomeValue
           if not 
                show the undefined
                stop the function with a code 
                    return


*/
    })   

    console.log("events.js")
}