// Variable para almacenar los productos
let productos = [];

// Función para crear un producto
function crearProducto(id, nombre, imagen, precio) {
    const nuevoProducto = { id, nombre, imagen, precio };
    productos.push(nuevoProducto);
    console.log('Producto agregado:', nuevoProducto);
    agregarProductoAlDOM(nuevoProducto);
}

// Función para eliminar un producto por su id
function eliminarProducto(id) {
    productos = productos.filter(producto => producto.id !== id);
    console.log('Producto eliminado con id:', id);
    eliminarProductoDelDOM(id);
}

function agregarProducto(event){
    event.preventDefault();
    const id = Date.now(); // Generar un id único basado en la fecha actual
    const nombre = document.getElementById('product-name').value;
    const imagen = document.getElementById('product-image').value;
    const precio = document.getElementById('product-price').value;
    crearProducto(id, nombre, imagen, precio);
};


// Función para agregar un producto al DOM
function agregarProductoAlDOM(producto) {
    const productList = document.querySelector('.product-list');
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id',producto.id);
    card.innerHTML = `
        <img src="${producto.imagen}" alt="Product Image">
        <div class="card-container--info">
            <p>${producto.nombre}</p>
            <section class="card-footer">
                <p>$${producto.precio}</p>
                <img src="./img/trash.svg" onclick="eliminarProducto(${producto.id})">
            </section>
        </div>
    `;
    productList.appendChild(card);
}

// Función para eliminar un producto del DOM
function eliminarProductoDelDOM(id) {
    const productList = document.querySelector('.product-list');
    const card = productList.querySelector(`.card[data-id="${id}"]`);
    if (card) {
        productList.removeChild(card);
    }
}