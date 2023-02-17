const container = document.querySelector('.container')
const container_size = 600;

// function that creates the grid
function gridCreate(num){
    if(num <= 0 || num > 100) return;
    for(let i =1; i <= (num * num); i++) {
        const div = document.createElement('div')
        const size = container_size / num ;
        str = size.toString()
        div.classList.add("gridBlock")
        div.setAttribute('id', 'box' + i)
        div.style.width = str + "px"; 
        div.style.height = str + "px";
        container.appendChild(div)
        
    }
}

gridCreate(16)