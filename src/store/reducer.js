import * as actions from './actions';

const defaultState = {
  name: '',
  breed: '',
  birthdate: null,
  isLoading: false,
};

export function dogProfileReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.SUBMIT_DOG_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    case actions.GET_DOG_PROFILE:
      return {
        isLoading: true,
      };
    case actions.SET_DOG_PROFILE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
  return state;
}

const defaultUserState = {
  isNewUser: true,
};

export function userReducer(state = defaultUserState, action) {
  switch (action.type) {
    case actions.IS_NEW_USER:
      return {
        ...state
      };
  }
  return state;
}