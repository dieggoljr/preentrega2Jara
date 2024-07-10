class Juego {
  constructor(id, nombre, compania, precio) {
    (this.id = id),
      (this.nombre = nombre),
      (this.compania = compania),
      (this.precio = precio);
  }
  mostrarInfoJuego() {
    console.log(
      `El juego ${this.nombre} fue desarrolado pors ${this.compania} y su precio es ${this.precio}`
    );
  }
  exponerEnListaJuegos() {
    console.log(this.id, this.compania, this.nombre, this.precio);
  }
}

const juego1 = new Juego(1, "Demon’s Souls Remake", "Sony", 63);
const juego2 = new Juego(2, "God of War: Ragnarok", "Sony", 70);
const juego3 = new Juego(3, "Baldur's Gate 3", "Larain", 54);
const juego4 = new Juego(4, "Horizon Forbidden West", "Sony", 60);
const juego5 = new Juego(5, "Call Of Duty: Vanguard", "Sledgehammer", 58);
const juego6 = new Juego(6, "Final Fantasy XVI", "Sony", 73);
const juego7 = new Juego(7, "Madden NFL 22", "Electronic Arts", 52);
const juego8 = new Juego(8, "MLB The Show 21", "Sony", 57);

const estanteria = [];
estanteria.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8);
const productosCarrito = [];

function mostrarListaJuegos(array) {
  console.log("Los juegos disponibles son: ");
  for (let juego of array) {
    juego.exponerEnListaJuegos();
  }
}

function buscarnombre(array) {
  let nombreBuscado = prompt("Ingresa el nombre del juego que desea");
  let busqueda = array.filter(
    (juego) => juego.nombre.toLowerCase() == nombreBuscado.toLowerCase()
  );
  if (busqueda.length == 0) {
    console.log(`No contamos ${nombreBuscado} en este momento`);
  } else {
    mostrarListaJuegos(busqueda);
  }
}

function buscarPorPrecio(array) {
  let precioBuscado = parseInt(
    prompt("Ingresa el monto máximo que desea gastar")
  );
  let menores = array.filter((juego) => {
    return juego.precio <= precioBuscado;
  });
  if (menores.length == 0) {
    console.log(
      `No contamos con juegos de un valor igual o inferior a  ${precioBuscado}`
    );
  } else {
    console.log(`Los juegos que valen ${precioBuscado} o menos son:`);
    mostrarListaJuegos(menores);
  }
}

function agregarJuego() {
  let nombre = prompt("Ingrese el nombre del juego");
  let compania = prompt("Ingresa la compañía que desarrolló el juego");
  let precio = parseInt(prompt(`Ingresa el valor de ${nombre}`));
  const nuevoJuego = new Juego(estanteria.length + 1, nombre, compania, precio);
  console.log(nuevoJuego);
  estanteria.push(nuevoJuego);
}

function ordenarMenorMayor(ar) {
  let arrMenor = ar.concat();
  arrMenor.sort((a, b) => a.precio - b.precio);
  mostrarListaJuegos(arrMenor);
}

function agregarAlCarrito(stock, carrito) {
  mostrarListaJuegos(stock);
  let idCompra = parseInt(prompt(`Ingrese el id del juego que desea`));
  let juegoComprado = stock.find((juego) => juego.id == idCompra);
  carrito.push(juegoComprado);
  console.log(carrito);
}

function finalizarCompra(carrito) {
  let total = 0;
  for (let juego of carrito) {
    total += juego.precio;
  }
  const totalReduce = carrito.reduce((acc, elemento) => {
    return acc + elemento.precio;
  }, 0);
  console.log(`El total de tu compra es ${totalReduce}. Qué te diviertas!`);
  let momentoCompra = new Date();
  console.log(`No compraste nada  ${momentoCompra.toDateString()}.`);

  carrito = [];
}

function menu() {
  let salirMenu = false;
  do {
    let opcionIngresada = parseInt(
      prompt(`Hace tu elección
                 1 - Consultar catálogo
                 2 - Buscar por nombre
                 3 - Buscar por precio
                 4 - Agregar juego 
                 5 - Ordenar menor a mayor por precio
                 6 - Agregar al carrito
                 7 - Finalizar compra
                 0 - Salir del menú`)
    );
    switch (opcionIngresada) {
      case 1:
        mostrarListaJuegos(estanteria);
        break;
      case 2:
        buscarnombre(estanteria);
        break;
      case 3:
        buscarPorPrecio(estanteria);
        break;
      case 4:
        agregarJuego();
        break;
      case 5:
        ordenarMenorMayor(estanteria);
        break;
      case 6:
        agregarAlCarrito(estanteria, productosCarrito);
        break;
      case 7:
        finalizarCompra(productosCarrito);
        break;
      case 0:
        console.log(`Gracias por visitarnos. Te esperamos!`);
        salirMenu = true;
        break;
      default:
        console.log("Opción no válida, ingresá alguna que esté en el menú");
        break;
    }
  } while (!salirMenu);
}

menu();
