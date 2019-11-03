let productsPerPage = 21;
let basket = {};
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.json-generator.com/api/json/get/ceTFqEMLsi?indent=2");
xhr.send();

var func = (productsPerPage) => {
    let content = '';

    for (let i = 0  ; i < productsPerPage; i++) {
        content +=
            `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
            <img  src="${products[i].image}" data-index="${i}" onclick="addToNewWindow(this)"> 
            <h4>${products[i].name}</h4>
            <h3>${products[i].price} $</h3>
            <input type="button" value="Buy now!" class="buy" id="btn" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" data-index="${i}" onclick="addToBasket(this)"> 
        </div>`
    };
    document.getElementById('data').innerHTML = content;
};

function addProducts(products) {
    let content = '';

    for (let i = 0; i < products.length; i++) {
        content +=
            `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
            <img  src="${products[i].image}" data-index="${i}" onclick="addToNewWindow(this)"> 
            <h4>${products[i].name}</h4>
            <h3>${products[i].price} $</h3>
            <input type="button" value="Buy now!" class="buy" id="btn" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" data-index="${i}" onclick="addToBasket(this)"> 
        </div>`
    };
    document.getElementById('data').innerHTML = content;
};

//functions of sorting
function numberProducts() {
    let productsPerPage = 21;

    products = JSON.parse(xhr.response);

    func(productsPerPage);
    // drawButtons(productsPerPage);
    // setEvents();
};

xhr.onload = numberProducts;

//functions of hover
function mOver(element) {
    element.style.opacity = "0.7";
};

function mOut(element) {
    element.style.opacity = "1";
};

function buttonOver(element){
    element.style.background = "#7ad258";
};

function buttonOut(element){
    element.style.background = "tomato";
}

//add to local storage
function addToBasket(e){
    let id = e.getAttribute('data-index');

    if(basket[id]===undefined){
      basket[id] = 1; 
    }else{
      basket[id]++;
    };
    localStorage.setItem('basket', JSON.stringify(basket));
    showBasket();
  };

  function checkBasket(){
      if(localStorage.getItem('basket') !== null){
          basket = JSON.parse(localStorage.getItem('basket'));
      };
  };
  checkBasket();
  showBasket();

  function showBasket(){
      let out = ''; 
      for(let key in basket){
        out+= basket[key];
    //     `<div class="goods" onmouseover="mOver(this)" onmouseout="mOut(this)">
    //     <img  src="${products[i].image}" data-index="${i}" onclick="addToNewWindow(this)"> 
    //     <h4>${products[i].name}</h4>
    //     <h5>${products[i].price} ₴</h5>
    //     <input type="button" value="Buy now!" class="buy" id="btn" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" data-index="${i}" onclick="addToBasket(this)"> 
    // </div>`;
      };
      document.querySelector('.modal-content').innerHTML = out;
  };

function toBasket(){
    window.open("basket.html");
};

//modal window
var modal = document.getElementsByClassName("myModal");
var btn = document.getElementsByClassName("buy");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = 'block';
};
span.onclick = function(){
    modal.style.display = 'none';
}
window.onclick = function(event){
if(event.target == modal){
    modal.style.display = 'none';    
}
}