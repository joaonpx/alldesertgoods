import { createCartElement } from "./createElement.js"

if (!localStorage.cartCount) {
  localStorage.cartCount = 0
}

if (!localStorage.cartPrice) {
  localStorage.cartPrice = 0
}

const cartItemContainer = document.querySelector(".cart-item-container")
const cartEmptyElement = document.querySelector(".cart-empty")

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

  if (JSON.parse(localStorage.cart).length) {
    cartEmptyElement.classList.add("not-visible")
    document.querySelector(".checkout").classList.add("active")
  } else {
    cartEmptyElement.classList.remove("not-visible")
  }
}

function updateCartCount() {
  localStorage.cartCount = Number(localStorage.cartCount) + 1
}

function updateCartPrice(price) {
  localStorage.cartPrice = Number(localStorage.cartPrice) + Number(price)
}

function updateCartItems(itemElement) {
  cartItemContainer.insertBefore(itemElement, cartEmptyElement)
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

  cartItemElement
    .querySelector(".remove-button")
    .addEventListener("click", (event) => {
      const itemElement = event.currentTarget.parentNode.parentNode
      const itemId = itemElement.id

      JSON.parse(localStorage.cart).forEach((item, index) => {
        if (item.id == itemId) {
          removeItem(itemElement, index)
        }
      })
    })

  cartItems.push(cartItem)

  localStorage.cart = JSON.stringify(cartItems)

  updateCartPrice(itemPrice)

  updateCartCount()

  updateCartItems(cartItemElement)

  updateCart()
}

function removeItem(item, itemIndex) {
  let itemPrice = item.querySelector("#price").dataset.price

  localStorage.cartPrice = Number(localStorage.cartPrice) - Number(itemPrice)

  localStorage.cartCount = Number(localStorage.cartCount) - 1

  cartItemContainer.removeChild(item)

  updateCart()

  JSON.parse(localStorage.cart).forEach((item, index) => {
    if (index === itemIndex) {
      JSON.parse(localStorage.cart).slice(0, index)
    }
  })
}

updateCart()

export { openCart, closeCart, addItem }
