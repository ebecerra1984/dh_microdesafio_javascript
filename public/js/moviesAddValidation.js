window.onload = function () {
  const titulo = document.querySelector("#titulo");
  titulo.focus();

  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = [];
    const datosForm = Object.fromEntries(new FormData(formulario));

    if (datosForm.awards === "") {
      errores.push("Awards debe estar completo");
    } else {
    }
    if (datosForm.title === "") {
    } else {
    }
    if (datosForm.genre_id === "") {
    } else {
    }
    if (datosForm.rating === "") {
    } else {
    }
    if (datosForm.release_date === "") {
    } else {
    }
    if (datosForm.length === "") {
    } else {
    }

    if (errores.lenght > 0) {
      e.preventDefault();
    }

    console.log(datosForm);
    console.log(errores);
  });
};
