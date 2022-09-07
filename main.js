//variables
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(event) {
 if(event.key == 'Enter') {//se a tecla apertada for Enter
  handleResetClick()
 } 
})

//Functions
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    //screen1.classList.add('hide')
    //screen2.classList.remove('hide')
 
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas` 
  }
  inputNumber.value = "" //limpa o campo do input após verificação
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  //screen1.classList.remove('hide')
  //screen2.classList.add('hide')
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

