export const SUBMIT_DOG_PROFILE = 'SUBMIT_DOG_PROFILE';
export const GET_DOG_PROFILE = 'GET_DOG_PROFILE';
export const IS_NEW_USER = 'IS_NEW_USER';
export const SET_NEW_USER = 'SET_NEW_USER';
export const SET_DOG_PROFILE = 'SET_DOG_PROFILE';

export const submitDogProfile = profile => ({
  type: SUBMIT_DOG_PROFILE,
  payload: profile
});

export const getDogProfile = () => ({
  type: GET_DOG_PROFILE
});

export const setDogProfile = (dog) => ({
  type: SET_DOG_PROFILE,
  payload: dog
});

export const isNewUser = (history) => ({
  type: IS_NEW_USER,
  payload: history
});

export const setIsNewUser = (user) => ({
  type: SET_NEW_USER,
  payload: user,
});
