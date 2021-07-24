import {
  Typography,
  TextField,
  Form,
  Button,
} from "../../components";
import useDogProfileForm from "./hook";
import { StyledDogProfileForm } from "./styles";

const DogProfileForm = () => {
  const {
    handleSubmit,
    name,
    setName,
    breed,
    setBreed,
    birthdate,
    setBirthdate
  } = useDogProfileForm();

  return (
    <div>

      <StyledDogProfileForm>
        <Typography variant="h3">Your Doggy Profile</Typography>
        <TextField label="name" name="name" value={ name } onChange={ e => setName(e.target.value) } />
        <TextField label="breed" name="breed" value={ breed } onChange={ e => setBreed(e.target.value) } />
        <TextField label="dob" name="dob" />
        <Button onClick={ () => handleSubmit() }>Next</Button>
      </StyledDogProfileForm>
    </div>
  )
}

export default DogProfileForm;