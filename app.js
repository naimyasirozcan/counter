
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 100
let counterDOM = document.querySelector('#counter')
let azalt = document.querySelector('#increase')
let arttir = document.querySelector('#decrease')

counterDOM.innerHTML = counter


arttir.addEventListener('click', clickEvent)
azalt.addEventListener('click', clickEvent)

function clickEvent() {
    this.id == 'increase' ? counter -= 1 : counter += 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}





