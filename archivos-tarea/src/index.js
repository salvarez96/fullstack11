function $(domElement) {
  return document.querySelector(domElement)
}

function $$(domElements) {
  return document.querySelectorAll(domElements)
}

function elementCreator(domElement, elementClass) {
  const newElement = document.createElement(domElement)
  newElement.classList.add(elementClass)
  return newElement
}

const submitButton = $('button')
const productInput = $('#productItem')
const priceInput = $('#productPrice')
const itemsList = $('#itemsList')

let productsList = []
let productId = 0

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  if(productInput.value.length > 0) {
    productsList.push({
      id: productId++,
      product: productInput.value,
      price: priceInput.value
    })
    // const productItemElement = elementCreator('li')
    // productItemElement.innerText = productsList[productsList.length - 1]
    // itemsList.insertAdjacentElement('beforeend', productItemElement)
    
  }
  console.log(productsList);
})

console.log('object');