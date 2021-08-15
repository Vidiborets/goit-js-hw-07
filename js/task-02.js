const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]; 
const elementAdd = ingredients.map(el => {
  const addElem = document.createElement('li');
  addElem.textContent = el
  return addElem
})

const listAddElements = document.querySelector('#ingredients')
listAddElements.append(...elementAdd)
