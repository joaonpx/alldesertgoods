function createGalleryElement(img, title, price) {
  let itemElement = document.createElement("div")
  itemElement.className = "gallery-item"
  itemElement.innerHTML = `<div class="gallery-img-container"><img class="gallery-img" src="${img}" alt="Gallery Item 1"/></div><span id="title">${title}</span><span id="price" data-price="${price}">$ </span>`

  return itemElement
}

function createCartElement(img, title, price, id) {
  let itemElement = document.createElement("div")
  itemElement.className = "cart-item"
  itemElement.id = `${id}`
  itemElement.innerHTML = `<div class="cart-hero"><div class="remove-button"><svg class="remove-button-img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div><div class="cart-img-container"><img class="cart-img" src="${img}" alt="Cart Item"></div><span id="title">${title}</span></div><span id="price" data-price="${price}">$ </span></div>`

  return itemElement
}

export { createGalleryElement, createCartElement }
