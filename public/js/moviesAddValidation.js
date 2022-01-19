window.onload = function () {
  const titulo = document.querySelector("#titulo");
  titulo.focus();

  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datosForm = Object.fromEntries(new FormData(formulario));

    datosForm.awards;
    datosForm.title;
    datosForm.genre_id;
    datosForm.rating;
    datosForm.release_date;
    datosForm.length;

    console.log(datosForm);
  });
};
