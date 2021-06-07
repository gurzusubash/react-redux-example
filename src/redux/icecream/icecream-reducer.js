import { initialIceCreamState } from "./icecream-state";
import { ADD_ICE_CREAM } from "./icecream-action-types";

export const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ADD_ICE_CREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};
