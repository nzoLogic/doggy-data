import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { actions } from '../../store';

const useDogProfileForm = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('');
  const [birthdate, setBirthdate] = useState(null);



  const dispatch = useDispatch();


  return {
    name,
    setName,
    breed,
    setBreed,
    birthdate,
    setBirthdate,
    handleSubmit: () => dispatch(actions.submitDogProfile({
      name,
      breed,
      birthdate
    }))
  }
}

export default useDogProfileForm;