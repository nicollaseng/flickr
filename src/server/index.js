import axios from "axios";

const fetchData = async tag => {
  var data = [];
  await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&safe_search=moderate&sort=relevance&sort=relevance&tag_mode=all&${tag &&
        tag.length > 0 &&
        `&tags=${tag}`}`,
      {
        charset: "utf8"
      }
    )
    .then(response => (data = response.data.items))
    .catch(err => err);
  return data;
};

export { fetchData };
