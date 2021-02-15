
import * as actionType from "../actions/actionType";

const initialState = {
  post:[
        {
              id:"1",
              header:"post one",
              body:" this is the body",
              created_at:"2/2/2021",
              tags:[{tag:'laravel'},
              {tag:'javascript'}],
              likes:[{
                    id:"1",
                    like:"1"
              }],
              comment:[{
                    id:"1",
                    body:"hi",
                    created_at:"2/2/2021"
              }]


        },
      
        {
            id:"2",
            header:"post two",
            body:" this is the body",
            created_at: '2/2/2021',
            tags:[{tag:'laravel'},
            {tags:"javascript"}],
            likes:[{
                  id:"2",
                  like:"2"
            }],
            comment:[{
                  id:"2",
                  body:"hello",
                  created_at:"2/2/2021"
            }]


      },
    
      
      
      ],

  message: {
    messages: [],
    alert: "",
  },
  redirect: false,
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
        post: [...state.post, action.post],
      };
   
    case actionType.DELETE_POST:
      return {
        ...state,
        post: [
          ...state.post.filter((post) => post.id !== action.payload),
        ],
      };

   

    default:
      return state;
  }
};

export default reducer;
