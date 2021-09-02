const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', (event) => {!event.currentTarget.value ? refs.span.textContent = 'незнакомец' : refs.span.textContent = event.currentTarget.value})
