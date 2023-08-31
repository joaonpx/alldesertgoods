function updateCart() {
  let cartCount = document.querySelector(".count")

  cartCount.setAttribute("data-count", localStorage.count)
}

function addItem() {
  if (localStorage.count) {
    localStorage.count = Number(localStorage.count) + 1
  } else {
    localStorage.count = 1
  }

  updateCart()
}

export { updateCart, addItem }
