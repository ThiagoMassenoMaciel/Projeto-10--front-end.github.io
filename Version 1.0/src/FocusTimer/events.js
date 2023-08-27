import { controls } from "./elements.js"
import * as actions from './actions.js'

export function registerControls(){
    console.log('registrado o evento ...')

    controls.addEventListener('click' , (e)=>{ 
        
        console.log("--addEventListenner")  
        const action= e.target.dataset.action; // verificando depois de clicado no div#Controls saber qual button foi clicado (pelo valor do data-set)

        if(typeof actions[action] !== "function"){   // depois de achado o valor data-set do button clicado executar a função do file actions.js que tenha o nome data-set igual NomeDaFunção() do file actions 
            //se n for função PARAR O FLUXO NESSE SCRIPT 
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


export function setminutes(){
    // colocando um ouvidor pra capturar o evento clicar no botão set e executar function( limpar o texto )
    el.min.addEventListener('focus', ()=> el.min.textContent = "" )

//        el.min.onkeypress = (event)=>{ true}    this will acssept all kinda of datas 
//        el.min.onkeypress = (event)=> false    qualquer tecla clicada vai retornar false para n retornar algo
// expressão regular é retornar true do evento se um de seus caracteres forem igual á expressão regular 

// vai fazer um teste se o nome da tecla clicada corresponde letra a exibir la no span textContext
//senão : N EXIBIR

//    el.min.onkeypress = (event) => /a/.test(event.key) 
//    testando se a pessoa digitou um numero e exibir-lo no span se n for n mostra

    el.min.onkeypress = (event) => /\d/.test(event.key) 
// blur is the reverse of focus 
    el.min.addEventListener('blur', (event)=> {  
        let time = event.currentTarget.textContent  
        time = time > 60 ? 60 : time 
        // reordenou o max para 60 o que tem q enviar isto para o user ver 
        // passe isso como valor para o State da aplicação 
        state.minutesss = time
        state.secondsss = 0  // I you want to edit the number of hours you can do it in the next test
// After the user change the minute | after you validate if its a number | after you update the state 
        // now you must Update the new value minutes to the display 

        UpdateDisplay() // or insted of you atribuat value to direct state 
        //i wanna just use the function UpdatDisplay(new value¹, new value²)
// Remenber  after use all this features on thi function you must to close  contentaditable 

//because after you change the minute and after you click the button play to start with new time 
//doesnt have to be possible to change the time minute ('span') until the aplication are running 

        el.min.removeAttribute('contenteditable')

    } )
}