function mediaFactory(activeProfile, mediaFiltered) {
  // Function helper: Multiples attributes
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  for (let i = 0; i < mediaFiltered.length; i++) {
    
    const media = document.createElement("article");
    media.setAttribute("class", "mediaCard");
    mediaContainer.appendChild(media);

    if (mediaFiltered[i].hasOwnProperty("image") === true) {
      const imageThumbnail = document.createElement("img");
      setAttributes(imageThumbnail, {
        class: "mediaCard__thumbnail",
        src: `/assets/images/Sample Photos/${
          activeProfile.name.replace("-", " ").split(" ")[0]
        }/${mediaFiltered[i].image}`,
      });
      media.appendChild(imageThumbnail);
    } else if (mediaFiltered[i].hasOwnProperty("image") === false) {
      const videoThumbnail = document.createElement("video");
      setAttributes(videoThumbnail, {
        controls: "true",
        class: "mediaCard__thumbnail",
        src: `/assets/images/Sample Photos/${
          activeProfile.name.replace("-", " ").split(" ")[0]
        }/${mediaFiltered[i].video}`,
      });
      media.appendChild(videoThumbnail);
    }
    const mediaHeader = document.createElement("div");
    media.appendChild(mediaHeader);
    mediaHeader.setAttribute("class", "mediaCard__header");
    const mediaHeaderContent = `
  <p class="mediaCard__header__title">${mediaFiltered[i].title}</p>
  <p class="mediaCard__header__favcount">${mediaFiltered[i].likes} <span class="fas fa-heart"></span></p>`;
    mediaHeader.innerHTML = mediaHeaderContent;
  }
}
