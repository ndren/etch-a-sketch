function clearEtch() {
    let etch = document.querySelector('#etch');
    etch.innerHTML = '';
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
function createDivs(rowCount, columnCount) {
    clearEtch();
    createColumns(columnCount);
    createRows(rowCount, columnCount);
    changeColor('black');
}
function changeColor(color) {
    rows = document.querySelectorAll('.row')
    rows.forEach(function (row) {
        row.addEventListener('mouseover', () => {row.style.backgroundColor = color})
    })
}
function changeProperties() {
    let rowCount = prompt("How many rows?", 16);
    let columnCount = prompt("How many columns?", 16);
    // Potentially to be implemented.
    let randomColors = prompt("(R)andom colors or (f)ixed colors?", "R");
    createDivs(rowCount, columnCount)
}
createDivs(16, 16);
let propertiesButton = document.querySelector('#properties');
propertiesButton.addEventListener("click", changeProperties);