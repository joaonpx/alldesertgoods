import { updateCart, openCart, closeCart, addItem } from "./utils/cart.js"

import { items } from "./utils/galleryItems.js"

updateCart()

items.forEach((item) => {
  let galleryColumnA = document.querySelector(".col-a")
  let galleryColumnB = document.querySelector(".col-b")

  let itemElement = document.createElement("div")
  itemElement.className = "gallery-item"
  itemElement.innerHTML = `<div class="gallery-img-container"><img class="gallery-img" src="${item.img}" alt="Gallery Item 1"/></div><span id="title">${item.name}</span><span id="price" data-price="${item.price}">$ </span>`

  if (items.indexOf(item) <= 2) {
    galleryColumnA.appendChild(itemElement)
  } else if (items.indexOf(item) > 2 && items.indexOf(item) <= 6) {
    galleryColumnB.appendChild(itemElement)
  }
})

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
