window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");
};

// let estadoSecreto = 0;
// const tituloInput = document.querySelector("#titulo");
// tituloInput.addEventListener("keyup", () => {
//   switch (tituloInput.value) {
//     case "s":
//       estadoSecreto = 1;
//       break;
//     case "se":
//       estadoSecreto = 2;
//       break;
//     case "sec":
//       estadoSecreto = 3;
//       break;
//     case "secr":
//       estadoSecreto = 4;
//       break;
//     case "secre":
//       estadoSecreto = 5;
//       break;
//     case "secret":
//       estadoSecreto = 6;
//       break;
//     case "secreto":
//       alert("SECRETO MAGICO");
//       estadoSecreto = 0;
//       break;
//     default:
//       tituloInput.value = "";
//       estadoSecreto = 0;
//   }
//   console.log(tituloInput.value);
//   console.log(estadoSecreto);
// });
