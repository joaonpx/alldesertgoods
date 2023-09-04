import { updateCart, openCart, closeCart, addItem } from "./utils/cart.js"

updateCart()

let addBtns = document.querySelectorAll(".gallery-item")

addBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let item = event.currentTarget
    let itemPrice = item.querySelector("#price").dataset.price

    addItem(itemPrice)
  })
})

let openBtn = document.querySelector(".open-btn")

openBtn.addEventListener("click", openCart)

let closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener("click", closeCart)

let colorfulBtn = document.querySelector(".colorful")

colorfulBtn.addEventListener("click", () => {
  document.body.classList.add("colorful")
})
