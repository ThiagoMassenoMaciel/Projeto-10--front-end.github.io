let CurrentMode = true
const button_mode = document.getElementById('toggle-mode');
button_mode.addEventListener('click' , swap_mode)

function swap_mode(event){
  document.querySelector('html').classList.toggle('light')
  const check_mode = CurrentMode ? `Modo Light`:`Modo Dark ` ;
  event.currentTarget.querySelector('span').textContent = `${check_mode} ativado`;
  CurrentMode = !CurrentMode; 
}
