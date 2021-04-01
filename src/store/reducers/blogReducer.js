import * as actionType from "../actions/actionType";

const initialState = {
  author: [
    {
      name: "folayan shola",
      bio: "this is us in the town of people with no choice",
    },
    {
      name: "folayan michael",
      bio: "this is us in the town of people with no choice",
    },

    {
      name: "folayan james",
      bio: "this is us in the town of people with no choice",
    },
  ],
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
      author: "folayan sola",
      header: "post one",
      body: " this is the body",
      time: "50 mins",
      created_at: "10 mins ago",
      tags: ["laravel", "javascript"],
    },

    {
      author: "folayan sola",
      header: "post two",
      body: " this is the body",
      time: "50 mins",
      created_at: "Today ",
      tags: ["laravel", "javascript"],
    },
  ],

  search: false,

  data: [],
  editor: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_POST:
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    case actionType.ON_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case actionType.SEARCH_RESULT:
      return {
        ...state,
        data: action.payload,
      };
    case actionType.EDITOR_TEXT:
      return {
        ...state,
        editor: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
