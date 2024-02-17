const numbersTable = document.getElementById('numbers');
const additionalNumbersTable = document.getElementById('additional-numbers');

let lottoNumbers = [];

while (lottoNumbers.length < 9) {
    const randomNumber = Math.floor(Math.random() * 37) + 1;
    if (!lottoNumbers.includes(randomNumber)) {
        lottoNumbers.push(randomNumber);
    }
}

const additionalNumbers = lottoNumbers.splice(-2);

lottoNumbers.sort((a, b) => a - b);

additionalNumbers.sort((a, b) => a - b);

const numbersRow = numbersTable.insertRow();
for (let i = 0; i < lottoNumbers.length; i++) {
    const cell = numbersRow.insertCell();
    cell.textContent = lottoNumbers[i];
}

const additionalNumbersRow = additionalNumbersTable.insertRow(); 
for (let i = 0; i < additionalNumbers.length; i++) {
    const cell = additionalNumbersRow.insertCell(); 
    cell.textContent = additionalNumbers[i];
}
