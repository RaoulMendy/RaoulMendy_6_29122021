// //Mettre le code JavaScript lié à la page photographer.html

// DOM Photograph-header
const photographerSection = document.querySelector(".photograph-header");
const photographerHeader = `
<div>
  <h1 class="photograph-header__name">Mon Nom</h1>
  <p class="photograph-header__city">Ville</p>
  <p class="photograph-header__tagline">Motto</p>
</div>
<button class="contact_button" onclick="displayModal()">Contactez-moi</button>
<img src="/assets/images/photographers/account.png" class="photograph-header__picture portrait" />
`;
photographerSection.innerHTML = photographerHeader;

// // DOM Photograph-media
const mediaSection = document.createElement("div");
photographerSection.after(mediaSection);
mediaSection.setAttribute("class", "photograph-media");

// DOM Menu déroulant
const mediaContent = `
<label for="sort">Trier par</label>
<select name="sort" id="sort" class="sort">
  <option value="popularité">Popularité</option>
  <option value="date">Date</option>
  <option value="titre">Titre</option>
</select>
<div class="photograph-media"></div>`;
mediaSection.innerHTML = mediaContent;

// arrow reverse
const arrow = document.getElementById("sort");
arrow.addEventListener("click", () => {
  arrow.style.backgroundImage = `url('/assets/icons/arrow-up.svg')`;
});

// DOM media grid


