const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

const changeSize = (event) => {
    const text = event.target.value;
    textEl.style.fontSize = `${text}%`;
}

inputEl.addEventListener('input', changeSize)