const urlAPI = "./data/photographers.json";
let resultatAPI;
let photographers;
let media;

async function APIcall() {
  await fetch(urlAPI)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      resultatAPI = data;
      photographers = data.photographers;
      media = data.media;
    });
}