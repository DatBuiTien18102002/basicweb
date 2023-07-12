const btn = document.querySelectorAll(".product-item-btn-add-cart-item");

btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
        if(document.getElementById('numproduct').innerText == 0){
            var hasProduct = document.getElementById('viewcart');
            hasProduct.classList.remove('header__cart-list--no-cart');
            document.getElementById('numproduct').style.display = "block";
            hasProduct.classList.add('header__cart-list--has-cart');
        }
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector(".product-item-name ").innerText;
        var productPrice = product.querySelector(".product-item-price-current").innerText;
        var num = document.getElementById('numproduct').innerText;
        
        
        document.getElementById('numproduct').innerHTML = String(Number(num) +1);
        addCart(productImg, productName, productPrice);
    })
})

function addCart(productImg, productName, productPrice) {
    var cartItem = document.querySelectorAll(".header__cart-item");
    for (var i = 0; i < cartItem.length; i++) {
        if (cartItem[i].querySelector('.header__cart-item-name').innerText == productName) {
            var numProNow = cartItem[i].querySelector('.header__cart-item-qnt').innerText;
            var newNumPro = 0;
            newNumPro = numProNow + 1;
            cartItem[i].querySelector('.header__cart-item-qnt').innerHTML = ++numProNow;
            cartTotal();
            return;
        }
    }
    var addProduct = document.createElement("li");
    addProduct.classList.add('header__cart-item');
    var content = '<img src="' + productImg + '" alt="" class="header__cart-img"><div class="header__cart-item-info"><div class="header__cart-item-head"><h5 class="header__cart-item-name">' + productName + '</h5><div class="header__cart-item-price-wrap"><span class="header__cart-item-price">' + productPrice + ' </span><sup style="font-size: 14px; font-weight: 400; color: red;">đ</sup> <span class="header__cart-item-multiply">x</span> <span class="header__cart-item-qnt">1</span> <span class="header__cart-item-delete">Xóa</span> </div></div></div>';
    addProduct.innerHTML = content;
    var cartlist = document.querySelector(".header__cart-list-item");
    cartlist.append(addProduct);

    cartTotal()
    deleteCart()
}

function cartTotal() {
    var cartItem = document.querySelectorAll(".header__cart-item");
    var sumPrice = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var numPro = cartItem[i].querySelector(".header__cart-item-price").innerText;
        var productPrice = cartItem[i].querySelector(".header__cart-item-qnt").innerText;

        var priceProduct = numPro * productPrice * 1000;
        /*Chuyển sang đinh dạng 1.000*/
        // var priceProduct = temp.toLocaleString('de-DE');
        sumPrice = sumPrice + priceProduct;
        
    }
    var cvSumPrice = sumPrice.toLocaleString('de-DE');

    var price = document.querySelector(".header__cart-item-total-money-price");
    price.innerHTML = cvSumPrice;
}


// ------------------Delete-------------------


// console.log(btn);

// proDelete.forEach(function (span) {
    
//     span.addEventListener("click", function (event) {
//         console.log(proDelete);
//         var cartDelete = event.target;
//         var cartDeleteParent = cartDelete.parentElement.parentElement.parentElement.parentElement;
//         cartDeleteParent.remove();
//     })
// })


// ------------------Delete-------------------

function deleteCart(){
    var cartItem = document.querySelectorAll(".header__cart-item");
    
    for(var i=0;i<cartItem.length;i++){
        var proDelete = document.querySelectorAll(".header__cart-item-delete");
        proDelete[i].addEventListener("click",function(event){
            var cartDelete = event.target;
            var cartDeleteParent = cartDelete.parentElement.parentElement.parentElement.parentElement;
            cartDeleteParent.remove();
            numTotal();  
            cartTotal();
            if(document.getElementById('numproduct').innerText == 0){
                var hasProduct = document.getElementById('viewcart');
                hasProduct.classList.remove('header__cart-list--has-cart');
                hasProduct.classList.add('header__cart-list--no-cart');
            }
            document.getElementById('numproduct').style.display = "none";
        })
        
    }
}

function numTotal() {
    var cartItem = document.querySelectorAll(".header__cart-item");
    var sumNum= 0;
    for (var i = 0; i < cartItem.length; i++) {
        var numPro = cartItem[i].querySelector(".header__cart-item-qnt").innerText;
        sumNum =  sumNum + Number(numPro);
        
    }
    console.log(cartItem.length);
    var numP = document.querySelector(".header__cart-notice");
    numP.innerHTML = String(sumNum);
}

//----------------Click tym---------------
const tym = document.querySelectorAll(".product-item-like");
console.log(tym );

tym.forEach(function (span) {
    span.addEventListener("click", function (event) {
        var tymProduce = event.target;
        var tymProduceParent = tymProduce.parentElement;
        if(tymProduceParent.classList.contains("product-item-like-liked")){
            tymProduceParent.classList.remove('product-item-like-liked');
        }else{
            tymProduceParent.classList.add('product-item-like-liked');
        }
    })
})

//------Tìm kiếm sản phẩm theo tên--------

var search_item = document.getElementById('search-item');
var product = document.querySelectorAll('.product-item');
search_item.addEventListener('keyup',searchItem);

function searchItem(e){ 
    // console.log(search_item.value);
    //Chuyển chữ thường
    var valueItem = search_item.value.toLowerCase();
    Array.from(product).forEach(function(ele){
        var nameItem = ele.querySelector('.product-item-name').innerText;
        if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
            ele.parentElement.style.display = 'block';
        }else{
            ele.parentElement.style.display = 'none';
        }

    });
    checkEmpty(product);
}
function checkEmpty(element){
    var count = 0;
    for(var i=0;i<element.length;i++){
        if(element[i].parentElement.style.display === 'block'){
            count++;
        }
    }
    console.log(count);
    if(count === 0){
        document.querySelector('#showtext').textContent = ' Không tìm thấy sản phẩm!!! ';
        
    }else{
        document.getElementById('showtext').innerText = ' ';
    }
}

//-----------Phóng ảnh và di chuyển ảnh sản phẩm--------------

const arrayImg = ['cupcake','ran','pancake','tiramisu','donut','kem','dautay','mousse']
const modal_div = document.getElementById('modal');
const imgBox = document.querySelector('.lightbox');
var pos=0;
Array.from(product).forEach(function(ele){
    ele.firstElementChild.addEventListener('click',function(){
        var imageProduct = ele.firstElementChild.src;
        //images/Cake/cupcake.jpg
        var imgPos = imageProduct.indexOf('Cake');
        var jpegPos = imageProduct.indexOf('.jpg');
        //Lấy ra tên ảnh cupcake từ chữ c nên  cộng 5
        var imagePro = imageProduct.slice(imgPos+5,jpegPos);
        
        modal_div.style.display = 'block';
        imgBox.style.backgroundImage = `url(images/Cake/${imagePro}.jpg)`;

        for(var i = 0 ; i<arrayImg.length;i++){
            if(imagePro === arrayImg[i]){
                pos = i;
            }
        }
    })
})

document.querySelector('.fa-window-close').addEventListener('click',function(){
    modal_div.style.display = 'none';
})

document.querySelector('.fa-caret-right').addEventListener('click',function(){
   pos++;
   if(pos > arrayImg.length-1){
        pos = 0;
   } 
   imgBox.style.backgroundImage = `url(images/Cake/${arrayImg[pos]}.jpg)`
})
document.querySelector('.fa-caret-left').addEventListener('click',function(){
    pos--;
    if(pos < 0){
         pos = arrayImg.length-1;
    } 
    imgBox.style.backgroundImage = `url(images/Cake/${arrayImg[pos]}.jpg)`
})

//-----------chuyển sang trang sản phẩm khác--------------

