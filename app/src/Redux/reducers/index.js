import { ADD1, HORIZONTAL_NAVIGATE } from "../constants";

const initialState = {
  num: 0,
  navigate: null
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD1) {
    return Object.assign({}, state, {
      num: state.num + 1
    });
  } else if (action.type == HORIZONTAL_NAVIGATE) {
    return Object.assign({}, state, {
      navigate: action.payload
    });
  }
  return state;
}

export default rootReducer;
