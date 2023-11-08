const products = [
  {
    id: 0,
    image: "images/11.1.jpg",
    title: "Bedside table",
    price: 120,
  },
  {
    id: 1,
    image: "images/12.1.jpg",
    title: "Mirror&Cloth rack",
    price: 225,
  },
  {
    id: 2,
    image: "images/12.4.jpg",
    title: "Coffee table",
    price: 700,
  },
  {
    id: 3,
    image: "images/1.1.jpg",
    title: "Office chair",
    price: 400,
  },
  {
    id: 4,
    image: "images/12.3.jpg",
    title: "Mirror starck",
    price: 569,
  },
  {
    id: 5,
    image: "images/12.5.jpg",
    title: "Jewelry holder",
    price: 569,
  },
];
const categories = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
         <div class='img-box'>
           <img class='images' src = ${image}></img>
         </div>
         <div class='bottom'>
         <P>${title}</p>
         <h2>${price}.00 Da</h2>` +
      "<button onclick ='addtocart(" +
      i++ +
      ")'>Add To Cart</button>" +
      `</div> </div>`
    );
  })
  .join("");

// add to cart function
var cart = [];

// check if element is added
function checkElements(item) {
  for (const cartItems of cart) {
    if (cartItems.id === item.id) {
      return true;
    }
  }
  return false;
}
function addtocart(a) {
  const itemToAdd = { ...categories[a] };
  if (checkElements(itemToAdd)) {
    alert("you already added this item");
  } else {
    cart.push(itemToAdd);
    displayCart();
  }
}

// delet from cart function
function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

// display cart function
function displayCart(a) {
  let j = 0,
    total = 0;

  //number of articls i added to cart
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItems").innerHTML = "Your Cart Is Empty";

    // the totle price when the cart is empty
    document.getElementById("totale").innerHTML = "" + 0 + ".00 Da";
  } else {
    document.getElementById("cartItems").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;

        // the total price when the cart is not empty
        total = total + price;
        document.getElementById("totale").innerHTML = "" + total + ".00 Da";

        return (
          `<div class="cart-item">
          <div class ="row-img">
            <img class="rowimg" src=${image}>
          </div>
          <p '>${title}</p> 
          <h2 '>${price}.00 Da</h2>` +
          "<i class='fa-solid fa-trash'  onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
