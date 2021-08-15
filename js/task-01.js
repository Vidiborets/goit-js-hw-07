const listEl = document.querySelector('#categories');

const elemItem = document.querySelectorAll('.item');

console.log(`в списке ${elemItem.length} категории`);


elemItem.forEach(el => {
    console.log('Категория:', el.getElementsByTagName('h2')[0].textContent )
    console.log('Количество элементов:', el.getElementsByTagName('li').length)
})
