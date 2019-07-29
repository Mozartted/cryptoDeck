import { combineReducers } from "redux";
// import { AsyncStorage } from "react-native";
// import { KEY_PREFIX } from "redux-persist";
import loadingReducer from "./loadingReducer";
import dashboardReducer from "../../modules/dashboard/store/reducer"

const appReducer = combineReducers({
  // authReducer,
  dashboardReducer,
  loadingReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
