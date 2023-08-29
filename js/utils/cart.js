let cartCount = document.querySelector(".count")

export function updateCart() {
  cartCount.setAttribute("data-count", localStorage.count)
}
