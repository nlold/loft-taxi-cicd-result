import { createReducer } from "@reduxjs/toolkit";
import { setUserData, clearUserData, setAuthState } from "./actions";

const initialStore = {
  isSignIn: false,
  data: {
    email: "",
    password: "",
    name: "",
    surname: "",
  },
};

export const userReducer = createReducer(initialStore, {
  [setUserData.type]: (store, action) => {
    store.data = action.payload;
  },
  [clearUserData.type]: (store) => {
    store.data = {
      email: "",
      password: "",
      name: "",
      surname: "",
    };
  },
  [setAuthState.type]: (store, action) => {
    store.isSignIn = action.payload;
  },
});
