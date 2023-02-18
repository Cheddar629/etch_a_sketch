const container = document.querySelector('.container')
const CONTAINER_SIZE = 600;
let gridSize = 16;
let currentColor = "Black";


// const sizeButton = document.querySelector('.sizeButton')
const resetButton = document.querySelector('.resetButton')
const blackButton = document.querySelector('.blackColorButton')
const rainbowButton = document.querySelector('.rainbowColorButton')
const darkenerButton = document.querySelector('.darkenerButton')

const slider = document.querySelector('.slider')
const input = document.querySelector('#input')
const sizeValue = document.querySelector('.sizeValue')
sizeValue.innerHTML = `${input.value}x${input.value}`

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

resetButton.addEventListener('click', gridReset)
blackButton.addEventListener('click', setBlackMode)
rainbowButton.addEventListener('click', setRainbowMode)

gridCreate(gridSize)

input.addEventListener("mousemove", (e) => {
    sizeValue.innerHTML = `${e.target.value}x${e.target.value}`
})

input.addEventListener("mouseup", (e) => {
    gridSize = e.target.value
    removeGrid()
    gridCreate(gridSize)
})



// function that creates the grid
function gridCreate(num){
    if(num <= 0 || num > 100) return;
    for(let i =1; i <= (num * num); i++) {
        const div = document.createElement('div')
        const size = CONTAINER_SIZE / num ;
        str = size.toString()
        div.classList.add("gridBlock")
        div.style.width = str + "px"; 
        div.style.height = str + "px";
        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColor)
        container.appendChild(div)  
    }
}


// function that removes the previous grid size
function removeGrid() {
    container.innerHTML = ''
}

// function that enables drawing on the grid depending of the option
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColor === 'Black') {
        e.target.style.background = 'black'
    } else if(currentColor === 'Rainbow') {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)

        e.target.style.background = `rgb(${red}, ${green}, ${blue})`
    } 
}

// function that resets the grid
function gridReset() {
    removeGrid()
    gridCreate(gridSize)
}

// function that sets the mode to black
function setBlackMode(){
    currentColor = 'Black';
}

//function that sets the mode to rainbow
function setRainbowMode(){
    currentColor = 'Rainbow'
}

function setDarkenMode(){
    currentColor = 'Darkener'
}





