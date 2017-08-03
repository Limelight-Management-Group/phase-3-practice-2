let modal = document.querySelector(".modal-container")
let modalOverlay = document.querySelector(".modal-overlay")
let modalOpen = document.getElementById("cart-button")
let modalClose = document.querySelector(".modal-close")
let modalClearBtn = document.querySelector(".modal-clear")
let addToCartBtn = document.querySelectorAll(".add-to-cart")
let itemContainer = document.querySelectorAll("li > span")



modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

addToCartBtn.forEach( element => {
  element.addEventListener("click", getItemData)
})

function getItemData(element) {
  console.log(element.target.parentElement.childNodes[0].innerHTML)
  console.log(element.target.parentElement.childNodes[1].innerHTML)
}


function openModal() {
  modal.classList.add("modal-open");
  modalOverlay.classList.add("hide-overlay");
}

function closeModal() {
  modal.classList.remove("modal-open");
  modalOverlay.classList.remove("hide-overlay");
}

function clearModalContent() {
  // add script to remove contents
  // clear totals
  // reset cart number
}
