const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

const increment = document.querySelector('#counter button[data-action="increment"]')
const decrement = document.querySelector('#counter button[data-action="decrement"]')
const valueText = document.querySelector('#value')


decrement.addEventListener('click', function () {
    counterValue.decrement();

    valueText.textContent = counterValue.value;
});

increment.addEventListener('click', function () {
    counterValue.increment();

    valueText.textContent = counterValue.value;
});
