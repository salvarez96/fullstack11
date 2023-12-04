const $ = (domElement) => document.querySelector(domElement)

const $$ = (domElements) => document.querySelectorAll(domElements)

const elementCreator = (domElement, elementClass = undefined, elementId = undefined) => {
  const newElement = document.createElement(domElement)

  if (elementClass) newElement.classList.add(elementClass)
  if (elementId) newElement.id = elementId

  return newElement
}

const generalContainer = $('.generalContainer')
const submitButton = $('button')
const productInput = $('#productItem')
const priceInput = $('#productPrice')
const itemsList = $('#itemsList')
const cartTotal = $('#cartTotal')
const cleanListButton = $('#cleanListButton')

let productsList = []
let productId = 0
let grandTotal = 0

productInput.focus()

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const productName = productInput.value
  const productPrice = priceInput.value

  if(productName.length > 0 && productPrice.length > 0) {
    productsList.push({
      id: ++productId,
      product: productName,
      price: parseInt(productPrice)
    })

    const productItemElement = elementCreator('li')
    const productInfoElement = elementCreator('p')
    productInfoElement.innerText = `${productName}:..... $${productPrice}`
    productItemElement.appendChild(productInfoElement)
    itemsList.insertAdjacentElement('beforeend', productItemElement)

    grandTotal += productsList[productsList.length-1].price

    cartTotal.innerText = grandTotal
  }
  console.log(productsList);
})

cleanListButton.addEventListener('click', () => {
  productsList = []
  productId = 0
  grandTotal = 0

  itemsList.replaceChildren()

  cartTotal.innerText = 0
  productInput.value = ''
  productInput.focus()
  priceInput.value = ''
})
