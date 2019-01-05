import { SAVE_LIST_TASK } from "./actions";

export default function todo(state = { list: [] }, action) {
  switch (action.type) {
    case SAVE_LIST_TASK:
      return { ...state, list: action.newList };
    default:
      return state;
  }
}
