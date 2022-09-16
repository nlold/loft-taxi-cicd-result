import { createReducer } from "@reduxjs/toolkit";
import { setPage } from "./actions";

const initialStore = {
  page: "Auth",
};

export const uiReducer = createReducer(initialStore, {
  [setPage.type]: (store, action) => {
    store.page = action.payload;
  },
});
