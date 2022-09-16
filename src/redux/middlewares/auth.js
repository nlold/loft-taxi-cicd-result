import { authenticateAction, setUserData, setAuthState } from "../user/actions";
import { authRequest } from "../../requests/auth";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === authenticateAction.type) {
    const email = action.payload.payloadEmail;
    const password = action.payload.payloadPassword;

    const sucess = await authRequest(email, password);

    const payload = {
      email,
      password,
    };

    if (sucess) {
      store.dispatch(setAuthState(true));
      store.dispatch(setUserData(payload));
    }
  } else {
    next(action);
  }
};
