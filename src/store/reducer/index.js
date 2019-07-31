import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import dashboardReducer from "../../modules/dashboard/store/reducer"

const appReducer = combineReducers({
  dashboardReducer,
  loadingReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
