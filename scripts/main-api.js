async function APIcall() {
  const urlAPI = "./data/photographers.json";
  await fetch(urlAPI)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      photographers = data.photographers;
      media = data.media;
    });
}
