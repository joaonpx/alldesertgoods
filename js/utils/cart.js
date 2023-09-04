if (!localStorage.cartCount) {
  localStorage.cartCount = 0
}

if (!localStorage.cartPrice) {
  localStorage.cartPrice = 0
}

function updateCart() {
  document
    .querySelector(".count")
    .setAttribute("data-count", localStorage.cartCount)
}

function openCart() {
  document.querySelector(".offcanvas").classList.add("active")
}

function closeCart() {
  document.querySelector(".offcanvas").classList.remove("active")
}

function updateCartCount() {
  if (localStorage.cartCount) {
    localStorage.cartCount = Number(localStorage.cartCount) + 1
  } else {
    localStorage.cartCount = 1
  }
}

function updateCartPrice(price) {
  if (localStorage.cartPrice) {
    localStorage.cartPrice = Number(localStorage.cartPrice) + Number(price)
  } else {
    localStorage.cartPrice = Number(price)
  }
}

function addItem(itemPrice) {
  updateCartPrice(itemPrice)

  updateCartCount()

  updateCart()
}

export { updateCart, openCart, closeCart, addItem }
