/* ============================================================
   TODO LO PARTICULAR DE LOS PRODUCTOS Y WHATSAPP SE EDITA AQUI.
   ============================================================ */

// EMPRESA: NUMERO DE WHATSAPP
// Cuba: escribe 53 seguido del numero, SIN +, espacios ni guiones.
// Ejemplo ficticio: 5350000000
const WHATSAPP = "5359041637";

// Nombres de las categorias. Puedes dejarlos asi.
const categorias = [
  { id: "informatica", nombre: "Informatica" },
  { id: "electronica", nombre: "Electronica" },
  { id: "electrodomesticos", nombre: "Electrodomesticos" },
  { id: "comida", nombre: "Comida" }
];

/* ============================================================
   PRODUCTOS
   En cada producto debes escribir:
   - nombre: nombre comercial del producto
   - precio: precio y moneda
   - descripcion: texto corto para el cliente
   - foto: ruta de la imagen. Ejemplo: "imagenes/laptop.webp"

   RECOMENDACION PARA CUBA: usa imagenes WebP pequenas, idealmente
   de aproximadamente 800 px de ancho o menos para ahorrar datos.
   ============================================================ */
const productos = {
  informatica: [
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }, // FOTO 1
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }, // FOTO 2
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }, // FOTO 3
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }  // FOTO 4
  ],
  electronica: [
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }
  ],
  electrodomesticos: [
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }
  ],
  comida: [
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" },
    { nombre: "ESCRIBE NOMBRE", precio: "ESCRIBE PRECIO", descripcion: "ESCRIBE DESCRIPCION", foto: "" }
  ]
};

/* Desde aqui hacia abajo NO necesitas editar nada. */
const root = document.querySelector("#catalogo");
const enlaceWhatsApp = nombre => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, me interesa: " + nombre)}`;

categorias.forEach(categoria => {
  const section = document.createElement("section");
  section.id = categoria.id;
  const cards = productos[categoria.id].map(producto => `
    <article class="product">
      <div class="photo">
        ${producto.foto ? `<img src="${producto.foto}" alt="${producto.nombre}" loading="lazy">` : "Anadir foto"}
      </div>
      <div class="info">
        <h3>${producto.nombre}</h3>
        <p><strong>${producto.precio}</strong></p>
        <p class="description">${producto.descripcion}</p>
        <a class="buy" target="_blank" rel="noopener" href="${enlaceWhatsApp(producto.nombre)}">Consultar por WhatsApp</a>
      </div>
    </article>`).join("");

  section.innerHTML = `<div class="wrap"><div class="section-title"><h2>${categoria.nombre}</h2><span>4 productos</span></div><div class="grid">${cards}</div></div>`;
  root.appendChild(section);
});

document.querySelector("#waFloat").href = `https://wa.me/${WHATSAPP}`;
document.querySelector("#year").textContent = new Date().getFullYear();
