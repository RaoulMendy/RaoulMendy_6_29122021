// Récupération de l'id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const main = document.querySelector("main");
const mediaContainer = document.querySelector(".mediaCard-container");

// Création de l'objet avec toutes les données
async function getActiveProfile() {
  await APIcall();

  function Trier(array, jsonId) {
    array.filter(function (el) {
      if (array.jsonId == id) return array.id == id;
    });
  }
  const profileSelected = photographers.filter(function (photographer) {
    return photographer.id == id;
  });

  let activeUser = profileSelected[0];

  const mediaFiltered = medias.filter(function (media) {
    if (media.photographerId == id) {
      return true;
    } else {
      return false;
    }
  });
  let tableauMedia = [];

  for (let i = 0; i < mediaFiltered.length; i++) {
    tableauMedia.push(mediaFiltered[i]);
  }

  return { activeUser, tableauMedia };
}

// Afficher le header
async function displayHeader(activeUser) {
  const photographerHeader = photographerFactory(activeUser);
  const oneCard = photographerHeader.headerDOM();
  main.prepend(oneCard);
}

async function init() {
  const { activeUser, tableauMedia } = await getActiveProfile();
  displayHeader(activeUser);
  mediaFactory(activeUser, tableauMedia);
}

init();
console.log(getActiveProfile());

// **********************************************************************************************************************

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// // DOM Menu déroulant
// const mediaContent = `
//   <label for="sort">Trier par</label>
//   <select name="sort" id="sort" class="sort">
//   <option value="popularité">Popularité</option>
//   <option value="date">Date</option>
//   <option value="titre">Titre</option>
// </select>
// <div class="photograph-media"></div>`;
// mediaSection.innerHTML = mediaContent;

// // arrow reverse
// const arrow = document.getElementById("sort");
// arrow.addEventListener("click", () => {
//   arrow.style.backgroundImage = `url('/assets/icons/arrow-up.svg')`;
// });
