var cesta= [];

function addCart(item){
    cesta.push(item.dataset);
    document.querySelector(".carrito").insertAdjacentHTML("beforeend", '<div class="carrito_elemento"><ul><li>Precio: <span>'+item.dataset.price+'</span></li><li>Nombre: <span>'+item.dataset.name+'</span></li></ul></div>');
}

