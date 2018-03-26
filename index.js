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
    console.log("In your cart, you have " + itemList.join(" and ") + ".")
}
  else { 
    var itemList = [];
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
        itemList.push(item + " at $" + cart[i][item]);
      }
      for (i = 0; i < cart.length; ++i) {
        if (i == cart.length - 1)
            itemList += " and " + item[i];
        else
            itemList += ", " + item[i];
    }
    console.log("In your cart, you have " + itemList.item(2, itemList.length) + ".")
}}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
