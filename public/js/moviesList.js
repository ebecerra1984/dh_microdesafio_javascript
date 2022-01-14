let body = document.querySelector("body");

window.onload = function () {
  let moviesListTitulo = document.querySelector(".moviesListTitulo");

  let modo = confirm("Desea modo oscuro");
  if (modo) {
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
  }

  console.log(body);
  moviesListTitulo.innerHTML = "LISTADO DE PELÍCULAS";
  moviesListTitulo.style.color = "white";
  moviesListTitulo.style.backgroundColor = "teal";
  moviesListTitulo.style.padding = "20px";
};

const logo = document.querySelector("#logo");
logo.addEventListener("mouseover", () => {
  console.log("Puntero en logo");
  body.style.backgroundColor = "#7f7f7f";
  body.classList.add("fondoMoviesList");
});

const botonAgregar = document.querySelector(".botonAgregar");
botonAgregar.addEventListener("mouseover", () => {
  botonAgregar.style.color = "yellow";
});

botonAgregar.addEventListener("mouseleave", () => {
  botonAgregar.style.color = "white";
});
