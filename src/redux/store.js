import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";

import appReducers from "./reducers";

// Redux Persist yapılandırması

const rootReducer = combineReducers({
  contacts: appReducers.contacts,
  filters: appReducers.filters,
});

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);
