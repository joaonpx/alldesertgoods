import { updateCart, addItem } from "./utils/cart.js"

if (!localStorage.count) {
  localStorage.count = 0
}

updateCart()

let addBtns = document.querySelectorAll(".gallery-img-container")

addBtns.forEach((btn) => {
  btn.addEventListener("click", addItem)
})

let colorfulBtn = document.querySelector(".colorful")

colorfulBtn.addEventListener("click", () => {
  document.body.classList.add("colorful")
})
