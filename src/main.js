var cesta= [];

function addCart(item){
    cesta.push(item.dataset);
    document.querySelector(".carrito").insertAdjacentHTML("beforeend", '<div class="carrito_elemento" data-name="' + item.dataset.name +'" data-price="'+item.dataset.price+'"><ul><li>Nombre: <span>'+item.dataset.name+'</span></li><li>Precio: <span>'+item.dataset.price+'€</span></li><li><button onclick="removeElement(this)">X</button></li></ul></div>');
    var total = 0.00
    cesta.forEach((element) => {
        total = total + parseFloat(element.price);
    });
    var remove = document.querySelector(".about_carrito_total");
    remove.remove();
    document.querySelector(".about_carrito_close").insertAdjacentHTML("afterend", '<div class="about_carrito_total"> Total: '+total+'€</div>');
    document.querySelector(".alert").style.display="block";
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    }, 2000);
}
function removeElement(item){
    var producto = item.parentElement.parentElement.parentElement;
    for (let i = 0; i< cesta.length;i++){
        if (cesta[i].name == producto.dataset.name) {
            cesta.splice(i, 1)
        }
    }
    producto.remove();
    var total = 0.00
    cesta.forEach((element) => {
        total = total + parseFloat(element.price);
    });
    var remove = document.querySelector(".about_carrito_total");
    remove.remove();
    document.querySelector(".about_carrito_close").insertAdjacentHTML("afterend", '<div class="about_carrito_total"> Total: ' + total + '€</div>');
}
function hideCart(){
    document.querySelector(".carrito").style.display= "none";
}

function showCart(){
    document.querySelector(".carrito").style.display = "block";
}
