function clearEtch() {
    let etch = document.querySelector('#etch');
    etch.innerHTML = '';
}
function decideColor(randomColors) {
    if (randomColors === 'r') {
        let red = Math.floor(255 * Math.random());
        let green = Math.floor(255 * Math.random());
        let blue = Math.floor(255 * Math.random());
        let alpha = Math.max(Math.random(), 0.5); // Minimum of 0.5, to keep high values.
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
        row.addEventListener('touchend', () => { row.style.backgroundColor = decideColor(randomColors) })
    })
}
function saveProperties() {
    let rowInput = document.querySelector('#rows')
    let columnInput = document.querySelector('#columns')
    let fixedInput = document.querySelector('#fixed')
    let randomInput = document.querySelector('#random')
    let rowCount = rowInput.value
    let columnCount = columnInput.value
    let randomColors
    if (fixedInput.checked) {
        randomColors = 'f'
    }
    else {
        randomColors = 'r'
    }

    if (isNaN(Number(rowCount)) || isNaN(Number(columnCount)) || columnCount <= 0 || rowCount <= 0) {
        clearEtch();
        let para = document.createElement('p');
        para.innerText = 'Sorry, the number of rows and/or columns is invalid. Please try again.';
        etch.appendChild(para);
    }

    else {
        createDivs(rowCount, columnCount, randomColors)
    }
}
function hideColorButton() {
    let fixedInput = document.querySelector('#fixed')
    let colorButton = document.querySelector('#color')
    if (fixedInput.checked) {
        colorButton.style.display = 'inline'
    }
    else {
        colorButton.style.display = 'none'
    }
}

let colorPicked = '#000000'
createDivs(16, 16, 'r');

let saveButton = document.querySelector('#save');
saveButton.addEventListener("click", saveProperties);

let colorConfigSpace = document.querySelector('#color-config')
colorConfigSpace.addEventListener("click", hideColorButton)