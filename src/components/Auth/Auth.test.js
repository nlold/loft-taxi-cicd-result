import React from "react";
import * as router from "react-router";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/configTests";
import { Auth } from "./Auth";

describe("Auth page simple test", () => {
  const currentState = {
    ui: {
      page: "Auth",
    },
    user: {
      isSignIn: false,
      data: {
        email: "",
        password: "",
        name: "",
        surname: "",
      },
    },
  };

  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  //hell

  // it("Input data and redirect to Map", () => {
  //   customRender(<Auth />, currentState);

  //   userEvent.type(screen.getByLabelText("Email"), "mentor-stream@mail.ru");
  //   userEvent.type(screen.getByLabelText("Password"), "1q2w3e4r");

  //   fireEvent.submit(screen.getByTestId("form-auth-page"), {
  //     target: {
  //       password: { value: "1q2w3e4r" },
  //       email: { value: "mentor-stream@mail.ru" },
  //     },
  //   });

  //   expect(navigate).toHaveBeenCalledWith("/map");
  // });

  it("Redirect to Registration", () => {
    customRender(<Auth />, currentState);

    userEvent.click(screen.getByTestId("new-profile-btn"));

    expect(navigate).toHaveBeenCalledWith("/registration");
    // expect(navigate).toHaveBeenCalledWith("/map");
  });
});
