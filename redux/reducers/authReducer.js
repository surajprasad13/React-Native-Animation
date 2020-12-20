import { FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS } from "../actions/types";


const INITIAL_STATE={
    token:""
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state };

    case FACEBOOK_LOGIN_FAIL:
      return { ...state };

    default:
      return state;
  }
};
