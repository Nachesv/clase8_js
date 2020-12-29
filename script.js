let carrito = new Array();
let cantidadItems = 0;
let precioTotal = 0;


if(confirm('Buen dia, desea realizar una compra?')){
    realizarCompra(carrito,cantidadItems, true, precioTotal);
} else {
    alert('Que tenga un buen dia');
}

function realizarCompra(carrito, cantidadItems, sigaComprando, precioTotal){

let pedido;


if(sigaComprando == true){
    pedido = prompt('Tipee lo que quiera agregar al carrito\n -PS5: $99999\n -XBOX: $89999\n -Buzo HGS: $3700\n -Tipee CANCELAR para salir');
}

// && yaCompre == 0
console.log(pedido)

if(pedido !== null ){
    do {
        switch(pedido){
            case 'PS5':
                let ps5 = new Producto('PS5', 99999, 'Consola')
                carrito.push(ps5);
                sigaComprando = AgregarProducto(ps5.precio, carrito, cantidadItems, precioTotal)
                break;
            case 'XBOX':
                let xbox = new Producto('XBOX', 89999, 'Consola')
                carrito.push(xbox);
                sigaComprando = AgregarProducto(xbox.precio, carrito, cantidadItems, precioTotal)
                break;
            case 'BUZO HGS':
                let buzo = new Producto('BUZO HGS', 3700, 'Merchandising')
                carrito.push(buzo);
                sigaComprando = AgregarProducto(buzo.precio, carrito, cantidadItems, precioTotal)
                break;
            case 'CANCELAR':
                sigaComprando = false
                break;
            default:
                pedido = prompt('Opcion invalida.\n Tipee lo que quiera agregar al carrito\n -PS5: $99999\n -XBOX: $89999\n -Buzo HGS: $3700\n -Tipee CANCELAR para salir');
        }
    }while (sigaComprando == true )
}
    // alert('Que tenga un buen dia.\n Total: ' + precioTotal);
    // pedido = null;

}

function Producto(nombre, precio, tipo){
    this.nombre = nombre;
    this.precio = precio;
    this.tipo   = tipo;
}

////--------OBJETOS PARA USAR PROXIMAMENTE-------------
function Compra(productos, importe, metodoDePago,cantCuotas){
    this.productos      = productos;
    this.importe        = importe;
    this.metodoDePago   = metodoDePago;
    this.cantCuotas     = cantCuotas;
    financiar = function(){
        if (this.metodoDePago = 'C' && this.cantCuotas > 1){
            importe = importe/cantCuotas
        }
    }
    recibo = function(){
        

        return `Productos ${Array.from(productos.nombre)}\n Importe final = ${importe} en ${cantCuotas}` 
    }
}

function Noticia(titulo, subtitulo, cuerpo, imagenes, autor){
    this.titulo     = titulo;
    this.subtitulo  = subtitulo;
    this.cuerpo     = cuerpo;
    this.imagenes   = imagenes;
    this.autor      = autor;
}




////--------------------------------------------------------


function AgregarProducto(precio, carrito, cantidadItems, precioTotal){
    
    let stringParaHTML;

    precioTotal += precio
    
    let sigaComprando = confirm(`Su carrito contiene ${carrito.length} items por un total de $${precioTotal}\n Desea continuar?`);
    
    let displayCarrito = document.querySelector('#carrito')

    if(sigaComprando == true){
        realizarCompra(carrito, cantidadItems, true, precioTotal);
    }else{
        alert('Que tenga un buen dia.\n Total: ' + precioTotal);
        pedido = null;
        // realizarCompra(carrito, cantidadItems, false, precioTotal);
        if (carrito.length > 0){
            displayCarrito.innerHTML = `<li> Su carrito consiste de ${carrito.length} productos: </li>`
            for (let i in carrito){
                // displayCarrito.textContent = `${carrito[i].nombre} - ${carrito[i].precio}\n`;
                 displayCarrito.innerHTML += `<li> ${carrito[i].nombre} - ${carrito[i].precio} </li>`

                //stringParaHTML += `<li> ${carrito[i].nombre} - ${carrito[i].precio} </li> \n`
            }

            //displayCarrito.innerHTML += stringParaHTML;
        }
        
    }



}