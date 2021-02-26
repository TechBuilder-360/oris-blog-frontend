import * as actionType from "./actionType";



export const add_post = (content) => {
  return {
    type: actionType.ADD_POST,
    payload: content,
  };
};




