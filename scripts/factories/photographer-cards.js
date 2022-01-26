
function photographerFactory(data) {
  const { name, city, tagline, price, portrait } = data;

  const picture = `assets/images/photographers/${portrait}`;

  function getUserCardDOM() {
    // Génération des éléments HTML + Nommage
    const article = document.createElement("article");
    article.setAttribute("class", "photographer-card");

    const link = document.createElement("a");
    link.setAttribute("class", "photographer-card__link");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("class", "photographer-card__link__portrait");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "photographer-card__link__name");

    const pOne = document.createElement("p");
    pOne.setAttribute("class", "photographer-card__city");

    const pTwo = document.createElement("p");
    pTwo.setAttribute("class", "photographer-card__tagline");

    const pThree = document.createElement("p");
    pThree.setAttribute("class", "photographer-card__price");

    // Contenu des éléments HTML
    h2.textContent = name;
    pOne.textContent = city;
    pTwo.textContent = tagline;
    pThree.textContent = `${price}€/jour`;

    // Agencement des éléments HTML
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    return article;
  }
  return { name, picture, getUserCardDOM };
}


