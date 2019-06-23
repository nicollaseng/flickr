import axios from "axios";

const fetchData = async () => {
  var data = [];
  await axios
    .get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true`,
      { charset: "utf8" }
    )
    .then(response => {
      console.log("mais itens carregados", response);
      data = response.data.items;
    })
    .catch(err => err);
  return data;
};

export { fetchData };
