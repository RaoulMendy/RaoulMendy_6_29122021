async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  let photographers = [];

  await fetch("./data/photographers.json")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (data) {
      photographers = data.photographers;
    })

    .catch(function (err) {
      console.log(err);
      // Une erreur est survenue
    });

  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
