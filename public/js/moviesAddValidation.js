window.onload = function () {
  const titulo = document.querySelector("#titulo");
  titulo.focus();

  const formulario = document.querySelector("form");
  console.log(formulario);

  formulario.addEventListener("submit", (e) => {
    // e.preventDefault();
    let errores = [];
    const datosForm = Object.fromEntries(new FormData(formulario));

    if (datosForm.awards === "") {
      errores.push("Awards debe estar completo");
      formulario.awards.classList.add("is-invalid");
    } else {
      formulario.awards.classList.add("is-valid");
    }
    if (datosForm.title === "") {
      errores.push("Titulo debe estar completo");
      formulario.title.classList.add("is-invalid");
    } else {
      formulario.title.classList.add("is-valid");
    }
    if (datosForm.genre_id === "") {
      errores.push("Genero debe estar completo");
      formulario.genre_id.classList.add("is-invalid");
    } else {
      formulario.genre_id.classList.add("is-valid");
    }
    if (datosForm.rating === "") {
      errores.push("Calificacion debe estar completo");
      formulario.rating.classList.add("is-invalid");
    } else {
      formulario.rating.classList.add("is-valid");
    }
    if (datosForm.release_date === "") {
      errores.push("Fecha de estreno debe estar completo");
      formulario.release_date.classList.add("is-invalid");
    } else {
      formulario.release_date.classList.add("is-valid");
    }
    if (datosForm.length === "") {
      errores.push("Duracion debe estar completo");
      formulario.length.classList.add("is-invalid");
    } else {
      formulario.length.classList.add("is-valid");
    }

    if (errores.length > 0) {
      e.preventDefault();
    }

    console.log(datosForm);
    console.log(errores);
  });
};
