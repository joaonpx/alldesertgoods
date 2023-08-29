import { updateCart } from "./utils/cart.js"

let addBtns = document.querySelectorAll(".gallery-img-container")

if (!localStorage.count) {
  localStorage.count = 0
}

updateCart()

function addItem() {
  if (localStorage.count) {
    localStorage.count = Number(localStorage.count) + 1
  } else {
    localStorage.count = 0
  }

  updateCart()
}

addBtns.forEach((btn) => {
  btn.addEventListener("click", addItem)
})

let colorfulBtn = document.querySelector(".colorful")

colorfulBtn.addEventListener("click", () => {
  document.body.classList.add("colorful")
})
