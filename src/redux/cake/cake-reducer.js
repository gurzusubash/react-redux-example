import { initialCakeState } from "./cake-state";
import { ADD_CAKE } from "./cake-action-types";

export const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};
