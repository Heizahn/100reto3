const hamburguesa = document.getElementById("hamburguesa");
const lista = document.getElementById("listaButton")
const cerrarHamburguesa = document.getElementById("cerrarHamburguesa")

hamburguesa.addEventListener('click', ()=> {
  hamburguesa.style.display = 'none';
  cerrarHamburguesa.style.display = 'flex'
  lista.style.display = 'flex';
})

cerrarHamburguesa.addEventListener('click', ()=> {
  lista.style.display = 'none';
  cerrarHamburguesa.style.display = 'none';
  hamburguesa.style.display = 'flex';
})