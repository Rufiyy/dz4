let counter = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

function updateCounter() {
    counterDisplay.textContent = counter;
    counterDisplay.className = counter > 0 ? 'green' : 'red';
}

incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});



const coordinateBlock = document.getElementById('coordinateBlock');
const xPosition = document.getElementById('xPosition');
const yPosition = document.getElementById('yPosition');

coordinateBlock.addEventListener('mousemove', (event) => {
    const rect = coordinateBlock.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    xPosition.textContent = x;
    yPosition.textContent = y;
});




const redLight = document.querySelector('.red-light');
const greenLight = document.querySelector('.green-light');

function changeLight(color) {
    redLight.classList.remove('active');
    greenLight.classList.remove('active');

    if (color === 'Красный') {
        redLight.classList.add('active');
        alert('STOP');
    } else if (color === 'Зеленый') {
        greenLight.classList.add('active');
        alert('GO');
    } else {
        alert('Неверный ввод. Введите "Красный" или "Зеленый"');
    }
}

const userColor = prompt('Введите цвет (Красный или Зеленый):');
changeLight(userColor);
