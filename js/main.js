import { updateCart, addItem } from "./utils/cart.js"

updateCart()

let addBtns = document.querySelectorAll(".gallery-img-container")

addBtns.forEach((btn) => {
  btn.addEventListener("click", addItem)
})

let colorfulBtn = document.querySelector(".colorful")

colorfulBtn.addEventListener("click", () => {
  document.body.classList.add("colorful")
})
