import { createCartElement } from "./createElement.js"

if (!localStorage.cartCount) {
  localStorage.cartCount = 0
}

if (!localStorage.cartPrice) {
  localStorage.cartPrice = 0
}

const cartItemContainer = document.querySelector(".cart-item-container")

let cartItems = []

if (!localStorage.cart) {
  localStorage.cart = JSON.stringify(cartItems)
} else {
  cartItems = JSON.parse(localStorage.cart)

  JSON.parse(localStorage.cart).forEach((item) => {
    const cartItemElement = createCartElement(
      item.img,
      item.name,
      item.price,
      item.id
    )

    updateCartItems(cartItemElement)
  })
}

function openCart() {
  document.querySelector(".offcanvas").classList.add("active")

  const removeButtons = document.querySelectorAll(".remove-button")

  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemElement = event.currentTarget.parentNode.parentNode
      const itemId = itemElement.id

      JSON.parse(localStorage.cart).forEach((item, index) => {
        if (item.id == itemId) {
          removeItem(itemElement, index)
        }
      })
    })
  })
}

function closeCart() {
  document.querySelector(".offcanvas").classList.remove("active")
}

function updateCart() {
  const cartCounts = document.querySelectorAll(".cart-count")

  cartCounts.forEach((cartCount) => {
    cartCount.setAttribute("data-cart-count", localStorage.cartCount)
  })

  const itemOrItems = document.querySelector(".itemOrItems")

  if (localStorage.cartCount == "1") {
    itemOrItems.innerHTML = "ITEM"
  } else {
    itemOrItems.innerHTML = "ITEMS"
  }

  document
    .querySelector(".cart-price")
    .setAttribute("data-cart-price", localStorage.cartPrice)
}

function updateCartCount() {
  localStorage.cartCount = Number(localStorage.cartCount) + 1
}

function updateCartPrice(price) {
  localStorage.cartPrice = Number(localStorage.cartPrice) + Number(price)
}

function updateCartItems(itemElement) {
  cartItemContainer.appendChild(itemElement)
}

function addItem(itemImg, itemTitle, itemPrice) {
  let id = 0

  cartItems.forEach(() => {
    id++
  })

  let cartItemElement = createCartElement(itemImg, itemTitle, itemPrice, id)

  let cartItem = {
    name: itemTitle,
    img: itemImg,
    price: itemPrice,
    id: id,
  }

  cartItems.push(cartItem)

  localStorage.cart = JSON.stringify(cartItems)

  updateCartPrice(itemPrice)

  updateCartCount()

  updateCart()

  updateCartItems(cartItemElement)
}

function removeItem(item, itemIndex) {
  let itemPrice = item.querySelector("#price").dataset.price

  localStorage.cartPrice = Number(localStorage.cartPrice) - Number(itemPrice)

  localStorage.cartCount = Number(localStorage.cartCount) - 1

  cartItemContainer.removeChild(item)

  JSON.parse(localStorage.cart).forEach((item, index) => {
    if (index === itemIndex) {
      console.log(`remove index: ${index}`)
    }
  })

  updateCart()
}

export { updateCart, openCart, closeCart, addItem }
