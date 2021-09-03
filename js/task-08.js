const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('[type="number"]'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-action="render"]'),
  clearBtn: document.querySelector('[data-action="destroy"]'),
}

let startingSize = 30;
let step = 10;
let startingFontSize = 10;
let fontSizeStep = 5;

function createBoxes(amount) {
  amount = refs.input.value;

  for (let i = 1; i <= amount; i += 1){
    const newBox = document.createElement('div');
    newBox.style.width = `${startingSize + step}px`;
    newBox.style.height = `${startingSize + step}px`;
    newBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    newBox.style.margin = "5px auto 5px";
    newBox.style.display = 'flex';
    newBox.style.alignItems = 'center'
    newBox.style.justifyContent = 'center';
    newBox.style.alignItems = 'center';
    newBox.style.fontSize = `${startingFontSize + fontSizeStep}px`;
    newBox.textContent = `Hello`

    step += 10;
    fontSizeStep += 4;

    refs.boxes.appendChild(newBox)
  }
}

function clearBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
  step = 10;
  fontSizeStep = 5;
}

refs.createBtn.addEventListener('click', createBoxes);
refs.clearBtn.addEventListener('click', clearBoxes);