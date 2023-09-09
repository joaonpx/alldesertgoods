if (!localStorage.cartCount) {
  localStorage.cartCount = 0
}

if (!localStorage.cartPrice) {
  localStorage.cartPrice = 0
}

let cartItemContainer = document.querySelector(".cart-item-container")

function openCart() {
  document.querySelector(".offcanvas").classList.add("active")
}

function closeCart() {
  document.querySelector(".offcanvas").classList.remove("active")
}

function updateCart() {
  let cartCounts = document.querySelectorAll(".cart-count")

  cartCounts.forEach((cartCount) => {
    cartCount.setAttribute("data-cart-count", localStorage.cartCount)
  })

  let itemOrItems = document.querySelector(".itemOrItems")

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

function addItem(itemImg, itemTitle, itemPrice) {
  updateCartPrice(itemPrice)

  updateCartCount()

  updateCart()

  let item = document.createElement("div")
  item.className = "cart-item"
  item.innerHTML = ` 
      <div class="cart-hero">
        <div class="remove-btn">
          <svg
            class="remove-btn-img"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fafafa"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
          </svg>
        </div>
        <div class="cart-img-container">
          <img
            class="cart-img"
            src="${itemImg}"
            alt="Cart Item"
          />
        </div>

        <span id="title">${itemTitle}</span>
      </div>

      <span id="price" data-price="${itemPrice}">$ </span>
  `

  cartItemContainer.appendChild(item)
}

function removeItem(item) {
  let itemPrice = item.querySelector("#price").dataset.price

  localStorage.cartPrice = Number(localStorage.cartPrice) - Number(itemPrice)

  localStorage.cartCount = Number(localStorage.cartCount) - 1

  cartItemContainer.removeChild(item)

  updateCart()
}

export { updateCart, openCart, closeCart, addItem, removeItem }
