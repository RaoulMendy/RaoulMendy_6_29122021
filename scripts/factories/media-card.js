function mediaFactory(data) {
  const { photographerId, title, image, likes, date, price } = data;

  function getMediaDOM() {
    // Génération des éléments HTML + Nommage
    const article = document.createElement("article");
    article.setAttribute("class", "media-card");

    const mediaCard = `
    <article>
      <img src="${image}" alt="${title}">
      <p>${title}</p>
      <
    </article>`;

    article.innerHTML = mediaCard;
    return article;
  }
  return { image, getMediaDOM };
}
