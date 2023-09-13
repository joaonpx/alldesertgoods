import { updateCart, openCart, closeCart, addItem } from "./utils/cart.js"

updateCart()

let addButtons = document.querySelectorAll(".gallery-item")

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let item = event.currentTarget
    let itemImg = item.querySelector(".gallery-img").src
    let itemTitle = item.querySelector("#title").textContent
    let itemPrice = item.querySelector("#price").dataset.price

    addItem(itemImg, itemTitle, itemPrice)
  })
})

let openButton = document.querySelector(".open-button")

openButton.addEventListener("click", openCart)

let closeButton = document.querySelector(".close-button")

closeButton.addEventListener("click", closeCart)

let colorfulButton = document.querySelector(".colorful")

colorfulButton.addEventListener("click", () => {
  document.body.classList.add("colorful")
})
