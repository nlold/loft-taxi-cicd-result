import { registrationAction, setUserData, setAuthState } from "../user/actions";
import { regRequest } from "../../requests/register";

export const registrationMiddleware = (store) => (next) => async (action) => {
  if (action.type === registrationAction.type) {
    const { payloadEmail, payloadPassword, payloadName, payloadSurname } =
      action.payload;

    const success = await regRequest(
      payloadEmail,
      payloadPassword,
      payloadName,
      payloadSurname
    );

    const payload = {
      email: payloadEmail,
      password: payloadPassword,
      name: payloadName,
      surname: payloadSurname,
    };

    if (success) {
      store.dispatch(setAuthState(true));
      store.dispatch(setUserData(payload));
    }
  } else {
    next(action);
  }
};
