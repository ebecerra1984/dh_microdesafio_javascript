window.onload = function () {
  const titulo = document.querySelector("#titulo");
  titulo.focus();

  const formulario = document.querySelector("form");
  console.log(formulario.title);

  formulario.addEventListener("submit", (e) => {
    // e.preventDefault();
    let errores = [];
    const datosForm = Object.fromEntries(new FormData(formulario));

    if (datosForm.awards === "") {
      errores.push("Awards debe estar completo");
      formulario.awards.classList.add("is-invalid");
    } else {
    }
    if (datosForm.title === "") {
      errores.push("Titulo debe estar completo");
      formulario.title.classList.add("is-invalid");
    } else {
    }
    if (datosForm.genre_id === "") {
      errores.push("Genero debe estar completo");
      formulario.genre_id.classList.add("is-invalid");
    } else {
    }
    if (datosForm.rating === "") {
      errores.push("Awards debe estar completo");
      formulario.awards.classList.add("is-invalid");
    } else {
    }
    if (datosForm.release_date === "") {
      errores.push("Awards debe estar completo");
      formulario.awards.classList.add("is-invalid");
    } else {
    }
    if (datosForm.length === "") {
      errores.push("Awards debe estar completo");
      formulario.awards.classList.add("is-invalid");
    } else {
    }

    if (errores.length > 0) {
      e.preventDefault();
    }

    console.log(datosForm);
    console.log(errores);
  });
};
