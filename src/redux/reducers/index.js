const initialState = {
  companiesFav: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        companiesFav: {
          ...state.companiesFav,
          content: [...state.companiesFav.content, action.payload],
        },
      };
    default:
      return state;
  }

  //   case {}
};

export default mainReducer;
