let cartOpenBtn = document.querySelector('#cart-open-btn');
let cartCloseBtn = document.querySelector('#cart-close-btn');
let cartElement = document.querySelector('#cart');
let cartItemsContainer = document.querySelector('#cart-items-container');
let cartItemTemplate = document.querySelector('#cart-item');
let cartOverallPrice = document.querySelector('#cart-overall-price')

function RefreshCartButton(){
    var count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].qty;
    }
    cartOpenBtn.innerHTML = 'Shopping Cart' + (count > 0 ? ' ('+count+')' : '')
}

function DrawCart() {
  cartItemsContainer.innerHTML = '';

  function RecalcOverallPrice() {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      price += cart[i].item.cost * cart[i].qty;
    }
    cartOverallPrice.innerHTML = 'Overall price: ' + price;
  }

  for (let i = 0; i < cart.length; i++) {
    let newItem = cartItemTemplate.content.cloneNode(true);

    let name = newItem.querySelector('#cart-item-name');
    let btnAdd = newItem.querySelector('#cart-cell-add');
    let count = newItem.querySelector('#cart-item-count');
    let btnRm = newItem.querySelector('#cart-cell-remove');
    let cost = newItem.querySelector('#cart-item-cost');

    function DrawCountAndCost(){
      count.innerHTML = cart[i].qty;
      cost.innerHTML = cart[i].qty * cart[i].item.cost;
    }

    name.innerHTML = cart[i].item.name;
    DrawCountAndCost();

    btnAdd.onclick = () => {
      cart[i].qty += 1;
      DrawCountAndCost();
      RecalcOverallPrice();
    }

    btnRm.onclick = () => {
      cart[i].qty -= 1;
      if (cart[i].qty > 0) {
        DrawCountAndCost();
        RecalcOverallPrice();
      }
      else {
        cart.splice(i,1);
        DrawCart();
      }
    }
    cartItemsContainer.appendChild(newItem);
  }
  RecalcOverallPrice();
  cartElement.hidden = false;
}

cartOpenBtn.onclick = DrawCart;
cartCloseBtn.onclick = () => {
  RefreshCartButton();
  cartElement.hidden = true;
}
