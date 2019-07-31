// import { RESET_LOADING_STATUS } from "../constants/actionTypes";

const initialState = {};

export default function loadingReducer(state = initialState, action) {

  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  // Not a REQUEST, SUCCESS, or FAILURE action
  if (!matches) return state;

  const [requestNameType, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === "REQUEST"
  };
}
