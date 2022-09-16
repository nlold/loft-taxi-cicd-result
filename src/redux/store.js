import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./ui/reducer";
import { userReducer } from "./user/reducer";
import { authMiddleware } from "./middlewares/auth";
import { registrationMiddleware } from "./middlewares/register";

export const rootReducers = combineReducers({
  ui: uiReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authMiddleware)
      .concat(registrationMiddleware),
});
