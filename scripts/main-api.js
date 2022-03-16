async function APIcall() {
  const urlAPI = "./data/photographers.json";
  await fetch(urlAPI)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      promiseAPI = data
      photographers = data.photographers;
      medias = data.media;
    });
}
