import * as actionType from "../actions/actionType";

const initialState = {
  categories: [
    "Science",
    "Art",
    "Biology",
    "Agriculture",
    "Economics",
    "History",
    "Music",
  ],
  post: [
    {
      Category_1d: "0",
      header: "post one",
      body: " this is the body",
      image: [],
      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },

    {
      Category_id: "1",
      header: "post two",
      body: " this is the body",
      image: [],
      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },

    {
      Category_id: "3",
      header: "post three",
      body: " this is the body",
      image: [],
      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },
    {
      Category_id: "4",
      header: "post four",
      body: " this is the body",
      image: [],

      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_POST:
      return {
        ...state,
        post: action.payload.post,
        like: action.payload.like,
        comment: action.payload.comment,
      };
    case actionType.ADD_POST:
      return {
        ...state,
        post: [...state.post, action.payload],
      };

    case actionType.DELETE_POST:
      return {
        ...state,
        post: [...state.post.filter((post) => post.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default reducer;
