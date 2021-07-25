import * as actions from './actions';
import storage from '../storage';

export const storageMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actions.SUBMIT_DOG_PROFILE) {
    storage.set('dog', action.payload);
  }
  if (action.type === actions.IS_NEW_USER) {
    if (storage.has('dog')) {
      const dog = storage.get('dog');
      dispatch(actions.setDogProfile(dog));
      dispatch(actions.setIsNewUser(false));
    } else {
      action.payload.push("/");
    }
  }
  return next(action);
};
