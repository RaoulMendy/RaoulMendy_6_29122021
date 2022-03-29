// Récupération de l'id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const main = document.querySelector("main");
const mediaContainer = document.querySelector(".mediaCard-container");

// Création de l'objet avec toutes les données
async function getActiveProfile() {
  await APIcall();
  // Filtre photographe actif
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

  let allLikes = 0;
  for (let i = 0; i < tableauMedia.length; i++) {
    allLikes += tableauMedia[i].likes;
    // console.log(`${allLikes} likes`);
  }


  return { activeUser, tableauMedia, allLikes };
}

function sticker(activeUser, allLikes) {
  const sticker = document.createElement("div");
  sticker.setAttribute("class", "sticker");
  const content = `
    <p class="sticker__likes">${allLikes} <span class="fas fa-heart"></span></p>
    <p class="sticker__price">${activeUser.price} € / jour</p>
   `;
  sticker.innerHTML = content;
  main.appendChild(sticker)
}
// Afficher le header
async function displayHeader(activeUser) {
  const photographerHeader = photographerFactory(activeUser);
  const oneCard = photographerHeader.headerDOM(); 
  main.prepend(oneCard);
  
}

async function init() {
  const { activeUser, tableauMedia, allLikes } = await getActiveProfile();
  displayHeader(activeUser);
  mediaFactory(activeUser, tableauMedia);
  sticker(activeUser, allLikes);
}

init();

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
