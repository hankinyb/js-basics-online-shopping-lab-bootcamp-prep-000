var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = {}; 
  var itemPrice = Math.floor((Math.random() * 10) + 1);
  itemName = { [item] : itemPrice };
  cart.push(itemName);
  console.log(item + " has been added to your cart.");
  return cart;
  
  }

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 2) {
    var itemList = [];
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
        itemList.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + [itemList.slice(0, -1).join(', '), itemList.slice(-1)[0]].join(itemList.length < 2 ? '' : ' and ') + ".")
}
  else {
    var itemList = [];
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
        itemList.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + [itemList.slice(0, -1).join(', '), itemList.slice(-1)[0]].join(itemList.length < 3 ? '' : ', and ') + ".")
}}

function total() {
  
  var itemPrice = [Math.floor((Math.random() * 10) + 1)];
 
  for (var i = 0; i < itemPrice.length; i++) {
    function sum(a,b) {
      return a + b
    }
  console.log (sum += itemPrice[i]);
  
}}


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
