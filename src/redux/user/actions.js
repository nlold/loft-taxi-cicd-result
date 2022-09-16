import { createAction } from "@reduxjs/toolkit";

export const setAuthState = createAction("@user/setAuthState");
export const setUserData = createAction("@user/setUserData");
export const clearUserData = createAction("@user/clearUserData");

export const authenticateAction = createAction("@user/authMiddleware");
export const registrationAction = createAction("@user/registrationMiddleware");
