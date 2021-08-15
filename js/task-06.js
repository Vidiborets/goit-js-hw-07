const inputEl = document.querySelector('#validation-input')

const elemenChange = () => {
    inputEl.classList.forEach(elem =>
        inputEl.classList.remove(elem)
    );
    if (inputEl.value.length === parseInt(inputEl.dataset.length, 10)) {
        inputEl.classList.add('valid')
    }
    else {
        inputEl.classList.add('invalid')
    }
}
inputEl.addEventListener('blur',elemenChange)