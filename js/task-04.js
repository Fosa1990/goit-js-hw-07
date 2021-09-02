let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
}

const increment = () => refs.counter.textContent = counterValue += 1
const decrement = () => refs.counter.textContent = counterValue -= 1

refs.decrementBtn.addEventListener('click', decrement)
refs.incrementBtn.addEventListener('click', increment)
