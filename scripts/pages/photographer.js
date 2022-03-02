// Récupération de l'id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// ISOLATION
async function photographerHeader() {
  await APIcall();
  const profileSelected = photographers.filter(function (photographer) {
    if (photographer.id == id) {
      return true;
    } else {
      return false;
    }
  });

  const photographerSelected = {
    name: profileSelected[0].name,
    city: profileSelected[0].city,
    tagline: profileSelected[0].tagline,
    portrait: profileSelected[0].portrait,
  };

  const photographerSection = document.querySelector(".photograph-header");
  const photographerHeader = `
<div>
<h1 class="photograph-header__name">${photographerSelected.name}</h1>
  <p class="photograph-header__city">${photographerSelected.city}</p>
  <p class="photograph-header__tagline">${photographerSelected.tagline}</p>
  </div>
  <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  <img src="/assets/images/photographers/${photographerSelected.portrait}" class="photograph-header__picture portrait" />
  `;
  photographerSection.innerHTML = photographerHeader;
}
photographerHeader();

// const newObj = {};
// for (let i = 0;  i < photographers.length; i++) {
//   console.log(photographers[i].id);
//   console.log(id)
//   if (photographers[i].id === id) {
//     newObj.push(photographers[i]);

// }}

// return console.log(newObj);
// console.log(id);
// console.log(typeof id);
// console.log(photographers.filter((e) => e == id));
// console.log(photographers);
// console.log(photographers[0]);
// console.log(typeof photographers[0].id);
// let callback = v => v.id === id
// const lebon = photographers.filter(callback);
// console.log(lebon)
// console.log(id)
// for (let i = 0;  i < photographers.length; i++) {
// console.log(photographers[i].id);
// if (photographers[i].id === id) {
//   return true
// }

// for (let i = 0;  i < photographers.length; i++) {
//   console.log(photographers[i]);

// }}
// console.log(photographers[0])
// console.log(id);
// console.log(photographers.find((e) => e.id === 243));
// console.log(photographers.filter((e) => e.id === `${id}`));
// console.log(photographers)

// return (
//   console.log(photographers.filter((id) => id.id === 243)),
//   console.log(photographers.find((id) => id.id === 243)),
//   console.log({photographers}),
//   console.log(photographers.find((x) => x.id === `${id}`)),
//   console.log(photographers.filter((x) => x.id === `${id}`))
// );

// const getPhotographerbyId = photographers.find((x) => x.id === `${id}`);

// Fonction de récupération des données
// async function apiGlobal() {
//   await APIcall();
//   return {
//     photographers,
//   };
// }

// Création de l'objet unique photographe pour header

// DOM Photograph-header


// // // DOM Photograph-media
// const mediaSection = document.createElement("div");
// photographerSection.after(mediaSection);
// mediaSection.setAttribute("class", "photograph-media");

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

// // DOM media grid

// displayPhotographerHeader();
