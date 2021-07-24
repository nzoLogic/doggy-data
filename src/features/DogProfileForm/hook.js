import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { actions } from '../../store';
import { useHistory } from "react-router-dom";

const useDogProfileForm = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('');
  const [birthdate, setBirthdate] = useState(null);
  const [isSubmitting, setSubmit] = useState(false);
  const history = useHistory()

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSubmitting) {
      dispatch(actions.submitDogProfile({
        name,
        breed,
        birthdate
      }))
      setSubmit(false);
      history.push("/greeting")
    }
  }, [isSubmitting])

  return {
    name,
    setName,
    breed,
    setBreed,
    birthdate,
    setBirthdate,
    handleSubmit: () => setSubmit(true)
  }
}

export default useDogProfileForm;