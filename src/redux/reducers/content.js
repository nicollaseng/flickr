import {
  FETCH_CONTENT,
  FETCH_TAG,
  TAG_CONTENT_REPEATED
} from "../actions/actionType";

import { updateObject } from "./utility";

const initialState = {
  content: [],
  tag: "",
  tagContent: [],
  type: "content",
  isRepeatedTagContent: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return updateObject(state, {
        content: action.payload,
        type: "content",
        tag: "",
        tagContent: [],
        isTag: false,
        isRepeatedTagContent: false
      });
    case FETCH_TAG:
      return updateObject(state, {
        tagContent: action.payload.content,
        tag: action.payload.tag,
        type: "tag",
        content: [],
        isContent: false
      });
    case TAG_CONTENT_REPEATED:
      return updateObject(state, {
        isRepeatedTagContent: action.payload
      });
    default:
      return state;
  }
}
