import * as actionType from "../actions/actionType";

const initialState = {
  
  categories: [
    "All",
    "Science",
    "Art",
    "Biology",
    "Agriculture",
    "Economics",
    "History",
    "Music",
  ],
  post: [],
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
