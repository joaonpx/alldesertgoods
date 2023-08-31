if (!localStorage.cartCount) {
  localStorage.cartCount = 0
}

function updateCart() {
  let count = document.querySelector(".count")

  count.setAttribute("data-count", localStorage.cartCount)
}

function addItem() {
  if (localStorage.cartCount) {
    localStorage.cartCount = Number(localStorage.cartCount) + 1
  }

  updateCart()
}

export { updateCart, addItem }
