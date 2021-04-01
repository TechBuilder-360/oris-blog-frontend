import * as actionType from "./actionType";

export const add_post = (content) => {
  return {
    type: actionType.ADD_POST,
    payload: content,
  };
};

export const on_search = (content) => {
  return {
    type: actionType.ON_SEARCH,
    payload: content,
  };
};

export const search_result = (content) => {
  return {
    type: actionType.SEARCH_RESULT,
    payload: content,
  };
};

export const add_text = (content) => {
  return {
    type: actionType.EDITOR_TEXT,
    payload: content,
  };
};
