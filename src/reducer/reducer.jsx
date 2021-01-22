import { DISPLAY_AUTHOR } from "../ActionType/ActionType";
import { ADD_AUTHOR } from "../ActionType/ActionType";
import { UPDATE_AUTHOR } from "../ActionType/ActionType";
import { DELETE_AUTHOR } from "../ActionType/ActionType";

const initialState = {
  authors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, ...action.payload],
      };

    case ADD_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };

    case UPDATE_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };

    case DELETE_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };

    default:
      return state;
  }
};
