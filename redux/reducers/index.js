import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import themeReducer, { themePersistConfig } from "./themeReducer";

export default combineReducers({
  themeState: persistReducer(themePersistConfig, themeReducer),
});
