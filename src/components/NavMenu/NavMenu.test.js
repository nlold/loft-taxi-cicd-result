import React from "react";
import * as router from "react-router";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/configTests";
import { NavMenu } from "./NavMenu";

describe("NavMenu page simple test", () => {
  const currentState = {
    ui: {
      page: "Map",
    },
    user: {
      isSignIn: true,
      data: {
        email: "mentor-stream@mail.ru",
        password: "1q2w3e4r",
        name: "Hell",
        surname: "Tohell",
      },
    },
  };

  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("Correct exit", () => {
    const { store } = customRender(<NavMenu />, currentState);

    userEvent.click(screen.getByTestId("exit-button"));

    expect(navigate).toHaveBeenCalledWith("/");

    const newStore = store.getState();

    expect(newStore.ui.page).toBe("Auth");
    expect(newStore.user.isSignIn).toBe(false);
    expect(newStore.user.data.email).toBe("");
    expect(newStore.user.data.password).toBe("");
    expect(newStore.user.data.name).toBe("");
    expect(newStore.user.data.surname).toBe("");
  });
});
