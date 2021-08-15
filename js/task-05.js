const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

function changeName (valueEl) {
    outputEl.textContent = valueEl.currentTarget.value || 'незнакомец'
}

inputEl.addEventListener('input', changeName)