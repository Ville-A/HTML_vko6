
const button = document.querySelector('button')
const list = document.querySelector('table')
const p = document.querySelector('p');

let jokeriCount = 0;

function generateJokerRow() {
    const newRow = list.insertRow();

    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        const newCell = newRow.insertCell();
        newCell.textContent = randomNumber;
    }

    jokeriCount++;
    p.textContent = `Valmiita rivejä ${jokeriCount}`;
}

button.addEventListener('click', generateJokerRow);