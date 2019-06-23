import { months } from "./Months";
import moment from "moment";

const tagFormatter = post => {
  const formated =
    post.tags && post.tags.length > 0
      ? post.tags.split(/(\s+)/).filter(e => e.trim().length > 0)
      : "";
  let tags = [];
  formated &&
    formated.length > 0 &&
    formated.map(format => {
      return (tags = [
        ...tags,
        `${format && format.length > 20 ? "" : `#${format}`}`
      ]);
    });
  return tags;
};

const dateFormatter = param => {
  let date = moment(param.published).format("DD-MM-YYYY");
  let day = `${date[0]}${date[1]}`;
  let month = months(`${date[3]}${date[4]}`);
  return { day, month };
};

const authorFormatter = param => {
  let index = param.author.indexOf("(");
  let author = param.author.slice(index + 2, param.author.length - 2);
  return author;
};

export { tagFormatter, dateFormatter, authorFormatter };
