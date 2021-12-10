let container = document.querySelector('#content-container');
let template = document.querySelector('#product-item');

myArray = [
  { name: "Laptop", cost: 20000, imgPath: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Sausages", cost: 150, imgPath: "https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Christmas socks", cost: 80, imgPath: "https://images.pexels.com/photos/5708917/pexels-photo-5708917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Mobile phone", cost: 8000, imgPath: "https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Headphones", cost: 1500, imgPath: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Book", cost: 300, imgPath: "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Cheese", cost: 150, imgPath: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Fridge", cost: 15000, imgPath: "https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Christmas tree", cost: 2000, imgPath: "https://images.pexels.com/photos/1734436/pexels-photo-1734436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Pizza", cost: 200, imgPath: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Pillow", cost: 1000, imgPath: "https://images.pexels.com/photos/8082239/pexels-photo-8082239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Soldering iron", cost: 500, imgPath: "https://images.pexels.com/photos/7819764/pexels-photo-7819764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "Camera", cost: 12000, imgPath: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  { name: "A hat", cost: 350, imgPath: "https://images.pexels.com/photos/10383484/pexels-photo-10383484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
];

let cart = [];

function AddToCart(item) {
  var cartEntry = cart.find((entry) => entry.item == item);
  if (cartEntry != null) {
    cartEntry.qty += 1;
  }
  else {
    cart.push({item: item, qty: 1});
  }
  RefreshCartButton();
}

for (let i = 0; i < myArray.length; i++) {
  let newItem = template.content.cloneNode(true);

  let img = newItem.querySelector('#product-cell-img');
  let name = newItem.querySelector('#product-cell-name');
  let cost = newItem.querySelector('#product-cell-cost');
  let btn = newItem.querySelector('#product-cell-btn');

  img.src = myArray[i].imgPath;
  name.innerHTML = myArray[i].name;
  cost.innerHTML = "Price: " + myArray[i].cost;
  btn.onclick = () => { AddToCart(myArray[i]) };

  container.appendChild(newItem);
}
