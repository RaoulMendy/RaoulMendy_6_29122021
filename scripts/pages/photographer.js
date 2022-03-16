// Récupération de l'id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const sectionHeader = document.querySelector(".photograph-header");
const mediaContainer = document.querySelector(".mediaCard-container");
let tableauMedia = [];
let activePhotographer = [];

// ISOLATION DES DONNEES
async function getActiveProfile() {
  await APIcall();
  const profileSelected = photographers.filter(function (photographer) {
    return photographer.id == id;
  });
  activePhotographer.push(profileSelected[0]);

  const mediaFiltered = medias.filter(function (media) {
    if (media.photographerId == id) {
      return true;
    } else {
      return false;
    }
  });

  for (let i = 0; i < mediaFiltered.length; i++) {
    tableauMedia.push(mediaFiltered[i]);
  }
}

async function createHTML() {
  await getActiveProfile();
  const contentHeader = `
  <div>
  <h1 class="photograph-header__name">${activePhotographer[0].name}</h1>
  <p class="photograph-header__city">${activePhotographer[0].city}</p>
  <p class="photograph-header__tagline">${activePhotographer[0].tagline}</p>
  </div>
  <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  <img src="/assets/images/photographers/${activePhotographer[0].portrait}" class="photograph-header__picture portrait" />

  `;
  sectionHeader.innerHTML = contentHeader;
  // *****************************************************************************
  // *****************************************************************************
  createArticle(activePhotographer, tableauMedia);

}

async function init() {
  await createHTML();
}

init();
console.log(tableauMedia);
console.log(activePhotographer);

// **********************************************************************************************************************
function createArticle(activeProfile, mediaFiltered) {
  //Function helper
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  // Boucle pour générer chaque article
  for (let i = 0; i < mediaFiltered.length; i++) {
    const media = document.createElement("article");
    media.setAttribute("class", "mediaCard");
    mediaContainer.appendChild(media);

    const mediaThumbnail = document.createElement("img");
    setAttributes(mediaThumbnail, {
      "class": "mediaCard__thumbnail",
      "src": `/assets/images/Sample Photos/${
        activeProfile[0].name.replace("-", " ").split(" ")[0]
      }/${mediaFiltered[i].image}`,
    });
    media.appendChild(mediaThumbnail);

    const mediaHeader = document.createElement("div");
    media.appendChild(mediaHeader);
    mediaHeader.setAttribute("class", "mediaCard__header")
    const mediaHeaderContent = `
    <p class="mediaCard__header__title">${mediaFiltered[i].title}</p>
    <p class="mediaCard__header__favcount">${mediaFiltered[i].likes} <span class="fas fa-heart"></span></p>`;
    mediaHeader.innerHTML = mediaHeaderContent;
  }
}
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
