function clearEtch() {
    let etch = document.querySelector('#etch');
    etch.innerHTML = '';
}
function decideColor(randomColors) {
    if (randomColors === 'r') {
        let red = Math.floor(255 * Math.random());
        let green = Math.floor(255 * Math.random());
        let blue = Math.floor(255 * Math.random());
        let alpha = Math.floor(Math.random() + 0.5); // Minimum of 0.5, to keep high values.
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;   
    }
    else {
        return document.querySelector('#color').value;
    }
}
function createColumns(columnCount) {
    let etch = document.querySelector('#etch');
    for (i = 0; i < columnCount; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        etch.appendChild(column);
    }
}
function createRows(rowCount, columnCount) {
    let allColumns = document.querySelectorAll('.column');
    allColumns.forEach(function (column) {
        for (i = 0; i < rowCount; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            // 75% of page to account for overhead. 
            row.style.height = `${window.innerHeight / columnCount * 0.75}px`;
            row.style.width = `${window.innerWidth / rowCount * 0.75}px`;
            column.appendChild(row);
        }
    })
}
function createDivs(rowCount, columnCount, randomColors) {
    clearEtch();
    createColumns(columnCount);
    createRows(rowCount, columnCount);
    changeColor(randomColors);
}
function changeColor(randomColors) {
    rows = document.querySelectorAll('.row')
    rows.forEach(function (row) {
        row.addEventListener('mouseover', () => { row.style.backgroundColor = decideColor(randomColors) })
    })
}
function changeProperties() {
    let rowCount = prompt("How many rows?", 16);
    let columnCount = prompt("How many columns?", 16);
    // Take strictly the first letter, in lowercase.
    let randomColors = prompt("(R)andom colors or (f)ixed colors?", "r").toLowerCase()[0];
    createDivs(rowCount, columnCount, randomColors)
}
let colorPicked = '#000000'
createDivs(16, 16, 'r');
let propertiesButton = document.querySelector('#properties');
propertiesButton.addEventListener("click", changeProperties);