import { actionType } from "../actions/themeAction";
import storage from "redux-persist/lib/storage";

const initialState = {
  darkModeEnabled: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.THEME_TOGGLE_SWITCH:
      return { ...state, darkModeEnabled: !state.darkModeEnabled };

    default:
      return state;
  }
};

export const themePersistConfig = {
  key: "themeState",
  storage: storage,
  whitelist: ["darkModeEnabled"],
};
