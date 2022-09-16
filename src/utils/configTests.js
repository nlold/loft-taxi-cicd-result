import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// https://v5.reactrouter.com/web/api/MemoryRouter
import { MemoryRouter, BrowserRouter } from "react-router-dom";

import { rootReducers } from "../redux/store";
import { authMiddleware } from "../redux/middlewares/auth";
import { registrationMiddleware } from "../redux/middlewares/register";

export const customRender = (component, state) => {
  const store = configureStore({
    reducer: rootReducers,
    preloadedState: state,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authMiddleware)
        .concat(registrationMiddleware),
  });

  return {
    ...render(
      <MemoryRouter>
        <Provider store={store}>{component}</Provider>
      </MemoryRouter>
    ),
    store,
  };
};
