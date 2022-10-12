//variable definition
const startButton = document.querySelector('#generate');
const container = document.getElementById('container');
const clearButton = document.querySelector('#clear');

//clear function
function clear() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
};

//create grid by pressing start button
startButton.addEventListener('click', () => {
    
    //clear the grid before running again
    clear();

    let rowVal = document.getElementById('rows').value;
    let colVal = document.getElementById('columns').value;

    container.style.setProperty('grid-template-columns', 'repeat(' + colVal + ', 1fr)');

    if(rowVal<=70 && colVal <=70){
        for(let c=0; c<(rowVal * colVal); c++) {
            let cell = document.createElement('div')
            cell.setAttribute('class', `grid-item`);
            cell.setAttribute('id', 'column');
            container.appendChild(cell);
        }
    } else {
        alert("Row and Column values must be less than or equal to 70")
    }


});

//clear button function
clearButton.addEventListener('click', () => {
    clear();

})

//change color of grid item by mouseover
container.addEventListener('mouseover', (e) => {
    if(e.target.matches('.grid-item')) {
        e.target.classList.add('active')
    }
})

