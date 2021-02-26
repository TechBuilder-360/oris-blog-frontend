import * as actionType from "../actions/actionType";

const initialState = {
  categories:[
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
      header: "post one",
      body: " this is the body",
      image: '',
      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },

    {
     
      header: "post two",
      body: " this is the body",
      image: [],
      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },

    {
     
      header: "post three",
      body: " this is the body",
      image: [],
      created_at: "2/2/2021",
      tags: ["laravel", "javascript"],
    },
    {
     
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
    
    case actionType.ADD_POST:
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
