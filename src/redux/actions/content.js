import { fetchData } from "../../server";
import { FETCH_CONTENT, FETCH_TAG, TAG_CONTENT_REPEATED } from "./actionType";
import isEqual from "lodash/isEqual";

/*
 * fetch general content
 */

const fetchContent = (content = []) => {
  return async dispatch => {
    let data = await fetchData();
    dispatch({
      type: FETCH_CONTENT,
      payload: [...content, ...data]
    });
  };
};

/*
 * fetch tag
 */

const fetchTag = (tag, tagContent = [], isRefetch) => {
  return async dispatch => {
    let data = await fetchData(tag);
    let isRepeated = isEqual(data.sort(), tagContent.sort());

    dispatch({
      type: TAG_CONTENT_REPEATED,
      payload: isRepeated
    });

    if (isRepeated) return;

    let reData = [];
    if (data.length < 20) {
      reData = await fetchData(tag);
      data = data.concat(reData).splice(0, 20);
    }
    dispatch({
      type: FETCH_TAG,
      payload: {
        tag,
        content: [...tagContent, ...data]
      }
    });
  };
};

export { fetchContent, fetchTag };
