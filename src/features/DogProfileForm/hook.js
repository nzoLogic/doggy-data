import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { actions } from '../../store';
import { useHistory } from "react-router-dom";

const useDogProfileForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [birthdate, setBirthdate] = useState(null);
  const [isSubmitting, setSubmit] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    const canSubmit = (name && breed && birthdate) && disabled;

    if (isSubmitting) {
      dispatch(actions.submitDogProfile({
        name,
        breed,
        birthdate
      }));
      setSubmit(false);
      history.push("/greeting");
    }
    if (canSubmit) {
      setIsDisabled(false);
    }
  }, [
    isSubmitting,
    dispatch,
    birthdate,
    breed,
    name,
    history,
    disabled
  ]);

  return {
    birthdate,
    breed,
    disabled,
    name,
    setName,
    setBreed,
    setBirthdate,
    handleSubmit: () => setSubmit(true)
  };
};

export default useDogProfileForm;