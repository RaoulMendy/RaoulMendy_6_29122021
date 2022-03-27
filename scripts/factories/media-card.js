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

    console.log(mediaFiltered[0].likes);

    let imageThumbnail = document.createElement("img");
    setAttributes(imageThumbnail, {
      class: "mediaCard__thumbnail",
      src: `/assets/images/Sample Photos/${
        activeProfile.name.replace("-", " ").split(" ")[0]
      }/${mediaFiltered[i].image}`,
    });

    // if (`${mediaFiltered[i].image}` == undefined) {
    //   let imageThumbnail = document.createElement("video");
    //   setAttributes(imageThumbnail, {
    //     controls: "true",
    //     class: "mediaCard__thumbnail",
    //     src: `/assets/images/Sample Photos/${
    //       activeProfile.name.replace("-", " ").split(" ")[0]
    //     }/${mediaFiltered[i].video}`,
    //   });
    //   media.appendChild(imageThumbnail);
    // } else {
    //   return false;
    // }
    media.appendChild(imageThumbnail);

    const mediaHeader = document.createElement("div");
    media.appendChild(mediaHeader);
    mediaHeader.setAttribute("class", "mediaCard__header");
    const mediaHeaderContent = `
    <p class="mediaCard__header__title">${mediaFiltered[i].title}</p>
    <p class="mediaCard__header__favcount">${mediaFiltered[i].likes} <span class="fas fa-heart"></span></p>`;
    mediaHeader.innerHTML = mediaHeaderContent;
  }
}

function createVideo() {
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

function createImage() {
  const imageThumbnail = document.createElement("img");
  setAttributes(imageThumbnail, {
    class: "mediaCard__thumbnail",
    src: `/assets/images/Sample Photos/${
      activeProfile.name.replace("-", " ").split(" ")[0]
    }/${mediaFiltered[i].image}`,
  });
  media.appendChild(imageThumbnail);
}


// class MoviesFactory {
//   constructor(data, type) {
//     // Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
//     if (type === "oldApi") {
//       return new OldMovie(data);
//       // Sinon retourne-moi le nouveau formatage
//     } else if (type === "newApi") {
//       return new Movie(data);
//       // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
//     } else {
//       throw "Unknown type format";
//     }
//   }
// }
