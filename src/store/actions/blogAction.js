
const add_comment = (id, title) => {
  return {
    type: actionType.ADD_COMMENT,
    comment: { id, title },
  };
};

const like=(data)=>{
      return{
            type:actionType.LIKE,
            payload: data
      }
}


const delete_COMMENT = (index) => {
  return {
    type: actionType.DELETE_COMMENT,
    payload: index,
  };
};

const add_post = (content) => {
  return {
    type: actionType.ADD_POST,
    payload: content,
  };
};

const edit_post = (content) => {
  return {
    type: actionType.EDIT_POST,
    payload: content,
  };
};

const delete_post = (index) => {
  return {
    type: actionType.DELETE_POST,
    payload: index,
  };
};

