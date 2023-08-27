
import * as Events from './FocusTimer/events.js'
// dark mode - true    starts the app this way
// light mode - false 

let CurrentMode = true

const button_mode = document.getElementById('toggle-mode');

button_mode.addEventListener('click' , swap_mode)

function swap_mode(event){
  //when this event happen the actual click will change the name just read by acessibility
  document.querySelector('html').classList.toggle('light')

  console.log("Changed the mode background")

  const check_mode = CurrentMode ? `Modo Light`:`Modo Dark ` ;
// screen only read ACESSIBILITY
  event.currentTarget.querySelector('span').textContent = `${check_mode} ativado`;

  /*

  console.log(check_mode)
  
  let change_desciption = document.querySelector('span')

  console.log(change_desciption)

  change_desciption.textContent = `${check_mode} ativado`;


  event.currentTarget.querySelector('span').TextContent = `${CurrentMode} ativado`;
           \___ pegar o butão e procurar dentro dele a tag span 

*/

  CurrentMode = !CurrentMode;  // cuz if you click on it go to next img and function  (add or remove the ClassList)


  //Events.registerControls();   if i repeat this code here will happen one bug
}
