function mediaFactory(activeProfile, mediaFiltered) {
  // Function helper: Multiples attributes
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
      class: "mediaCard__thumbnail",
      src: `/assets/images/Sample Photos/${
        activeProfile.name.replace("-", " ").split(" ")[0]
      }/${mediaFiltered[i].image}`,
    });
    media.appendChild(mediaThumbnail);

    const mediaHeader = document.createElement("div");
    media.appendChild(mediaHeader);
    mediaHeader.setAttribute("class", "mediaCard__header");
    const mediaHeaderContent = `
    <p class="mediaCard__header__title">${mediaFiltered[i].title}</p>
    <p class="mediaCard__header__favcount">${mediaFiltered[i].likes} <span class="fas fa-heart"></span></p>`;
    mediaHeader.innerHTML = mediaHeaderContent;
  }
}