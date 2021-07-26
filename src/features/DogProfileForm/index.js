import {
  Typography,
  TextField,
  Button,
} from "../../components";
import useDogProfileForm from "./hook";
import {
  StyledDogProfileForm,
  StyledRoot,
  StyledButton,
} from "./styles";
import { getTodaysDate } from "../../helpers";

const DogProfileForm = () => {
  const {
    handleSubmit,
    name,
    disabled,
    setName,
    breed,
    setBreed,
    setBirthdate
  } = useDogProfileForm();

  return (
    <StyledRoot>
      <StyledDogProfileForm>
        <Typography variant="h3">Your Doggy Profile</Typography>
        <TextField required label="name" name="name" value={ name } onChange={ e => setName(e.target.value) } />
        <TextField required label="breed" name="breed" value={ breed } onChange={ e => setBreed(e.target.value) } />
        <TextField
          required
          type="date"
          label="dob"
          name="dob"
          defaultValue={ getTodaysDate() }
          InputProps={ {
            shrink: true
          } }
          onChange={ e => setBirthdate(e.target.value) } />
        <StyledButton disabled={ disabled } component={ Button } onClick={ handleSubmit }>Next</StyledButton>
      </StyledDogProfileForm>
    </StyledRoot>
  );
};

export default DogProfileForm;