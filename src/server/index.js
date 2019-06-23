import axios from "axios";

const fetchData = async tag => {
  console.log("tag que vem pro fetch data", tag);
  var data = [];
  await axios
    .get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&safe_search=safe&sort=relevance${tag.length >
        0 && `&tags=${tag}`}`,
      { charset: "utf8" }
    )

    .then(response => {
      console.log(
        "mais itens carregados",
        response,
        "url",
        `${"https://cors-anywhere.herokuapp.com/"}https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&safe_search=safe&sort=relevance${tag.length >
          0 && `&tags=${tag}`}`
      );
      data = response.data.items;
    })
    .catch(err => err);
  return data;
};

export { fetchData };
