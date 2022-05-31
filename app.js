
let counterDOM = document.querySelector('#counter')
let azalt = document.querySelector('#increase')
let arttir = document.querySelector('#decrease')
let counter = parseInt(counterDOM.innerHTML)
arttir.addEventListener('click', clickEvent)
azalt.addEventListener('click', clickEvent)

function clickEvent(){
    this.id == 'increase' ? counter -= 1 : counter += 1
    counterDOM.innerHTML = counter
}