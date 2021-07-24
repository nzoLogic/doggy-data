import * as actions from './actions';

const defaultState = {
  dogProfile: {
    name: '',
    breed: '',
    birthdate: null,
  }
}

export function dogProfileReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.SUBMIT_DOG_PROFILE:
      return {
        ...state,
        ...action.payload
      }
    default:
      break;
  }
  return state;
}