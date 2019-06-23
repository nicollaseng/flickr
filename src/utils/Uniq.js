import uniqBy from "lodash/uniqBy";

const uniqPost = param => {
  const data = uniqBy(param, post => post.date_taken && post.title);
  return data;
};

const cleanSearch = (param, key) => {
  const data = uniqBy(param, e => e === key);
  return data;
};

export { uniqPost, cleanSearch };
