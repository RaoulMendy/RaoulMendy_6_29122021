//Mettre le code JavaScript lié à la page photographer.html

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
