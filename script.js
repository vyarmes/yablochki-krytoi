let productsGrid = document.getElementById("products-grid");
let productsArray = [];
const url = "https://yablochki-2d82.restdb.io/rest/product";
const api_key ="69343d881c64b95446dde62e";

const my_header = {
    "Content-Type": "application/json",
    "x-apikey": api_key,
    "cache_control": "no-cache",
};

fetch(url,{
    method: "GET",
    headers: my_header
})

.then(async function (response) {
    productsArray = await response.json();;
    productsGrid.innerHTML = null;
    productsArray.forEach((p) => {
    productsArray.push(p);
    let pElem = document.createElement("div");
    pElem.classList.add("product");
    pElem.innerHTML = `
            <h2 class='product-name'>${p.name}</h2>
            <img class = 'product-photo' src="${p.photo_url}" alt='${p.name}'>
            <p class = 'product-price'><b>Price: </b>${p.price}</p>
            <p class = 'product-description'><b>Description: </b>${p.description}</p>
            <p class = 'description'>${p.description}</a>
            <button onclick="addProductToCart(${p._id})">Buy</button> 
            `;
    productsGrid.append(pElem);
  });
})

let cartProd = document.getElementById("cart-products");

let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  drawCartProducts();
}

function addProductToCart(id) {
  let product = productsArray.find(function (p) {
    return p.id == _id;
  });
  cart.push(product);
  drawCartProducts();
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-button").classList.add("active");
  setTimeout(function () {
    document.getElementById("cart-button").classList.remove("active");
  }, 500);
}

function drawCartProducts() {
  if (cart.length === 0) return (cartProd.innerHTML = "Cart is empty");
  cartProd.innerHTML = null;
  let sum = 0;
  cart.forEach(function (p) {
    cartProd.innerHTML += `
            <p><img src="${p.photo_url}"> ${p.name} |${p.price}$</p>
            <hr>
        `;
    sum += p.price;
  });
  cartProd.innerHTML += `
        <p>Total Price: ${sum}$</p>
        <button onclick="buyAll()">Buy All</button>
    `;
}

function buyAll() {
  cart = [];
  cartProd.innerHTML = "Money was withdrawn from your credit card";
  localStorage.setItem("cart", "[]");
}

function openCart() {
  cartProd.classList.toggle("hide");
}