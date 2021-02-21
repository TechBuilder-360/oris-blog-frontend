import * as actionType from "./actionType";



export const add_post = (content) => {
  return {
    types: actionType.ADD_POST,
    payload: content,
  };
};




