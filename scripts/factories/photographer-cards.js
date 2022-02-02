function photographerFactory(data) {
  const { name, city, tagline, price, portrait } = data;
  const picture = `assets/images/photographers/${portrait}`;
  
  function getUserCardDOM() {
    // Génération des éléments HTML + Nommage
    const article = document.createElement("article");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    
    article.setAttribute("class", "photographer-card");
    link.setAttribute("class", "photographer-card__link");
    link.setAttribute("href", "photographer.html");
    img.setAttribute("src", picture);
    img.setAttribute("class", "photographer-card__link__portrait");
    h2.setAttribute("class", "photographer-card__link__name");
    pOne.setAttribute("class", "photographer-card__city");
    pTwo.setAttribute("class", "photographer-card__tagline");
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




