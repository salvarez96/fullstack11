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
const cartTotal = $('#cartTotal')

let productsList = []
let productId = 0
let grandTotal = 0

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const productName = productInput.value
  const productPrice = priceInput.value

  if(productName.length > 0 && productPrice.length > 0) {
    productsList.push({
      id: productId++,
      product: productName,
      price: parseInt(productPrice)
    })

    const productItemElement = elementCreator('li')
    const productInfoElement = elementCreator('p')
    productInfoElement.innerText = `${productName}: $${productPrice}`
    productItemElement.appendChild(productInfoElement)
    itemsList.insertAdjacentElement('beforeend', productItemElement)

    grandTotal += productsList[productsList.length-1].price

    cartTotal.innerText = grandTotal
  }
  console.log(productsList);
})
