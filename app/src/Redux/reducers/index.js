import { ADD1 } from "../constants";

const initialState = {
  num: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD1) {
    return Object.assign({}, state, {
      num: state.num + 1
    });
  }
  return state;
}

export default rootReducer;
