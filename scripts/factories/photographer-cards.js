function photographerFactory(data) {
  const { name, city, tagline, price, portrait, id } = data;
  const picture = `assets/images/photographers/${portrait}`;

  // Méthode qui génère le HTML
  function getUserCardDOM() {
    //Creation et pointage de la balise ARTICLE
    const article = document.createElement("article");
    article.setAttribute("class", "photographer-card");
    // A
    const photographerCard = `
      <a class="photographer-card__link" href="photographer.html?id=${id}">
        <img
          src="${picture}"
          class="photographer-card__link__portrait portrait"
        />
        <h2 class="photographer-card__link__name">${name}</h2>
      </a>
    <p class="photographer-card__city">${city}</p>
    <p class="photographer-card__tagline">${tagline}</p>
    <p class="photographer-card__price">${price}/jour</p>`;

    article.innerHTML = photographerCard;
    return article;
  }
  return { name, picture, getUserCardDOM };
}
