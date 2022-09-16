import { createSelector } from "@reduxjs/toolkit";

const selectUser = (store) => store.user;
export const selectUserData = createSelector(selectUser, (user) => user.data);
export const selectSignInData = createSelector(
  selectUser,
  (user) => user.isSignIn
);
