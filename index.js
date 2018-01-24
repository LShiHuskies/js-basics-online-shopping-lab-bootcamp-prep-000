var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100) + 1
 cart.push({[item] : price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
    var newarray = [];
    for (var i = 0; i < cart.length; i++) {
        var keys = Object.keys(cart[i][0])
        newarray.push(keys + " at $" + cart[i][keys])
      }
  var mystring = "In your cart, you have "
    if(newarray.length === 1) {
      mystring += newarray
    }
    else if (newarray.length === 2) {
       var variable = newarray.join(" and ")
       mystring += variable + "."
    }
    else if (newarray.length > 2) {
      var lastelement = newarray.pop()
      var otheritem = newarray.join(", ")
      mystring += newarray + " and " + lastelement
    }
    console.log(mystring + newarray.join(", ") + ".")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
