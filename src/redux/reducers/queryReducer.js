import { GET_QUERY } from "../actions";
const initialState = {
  content: null,
};
const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default queryReducer;
