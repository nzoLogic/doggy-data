import { StyledRoot, StyledImage } from './styles';
import { DogImage, Typography, TextField } from '../../components';
import { Grid } from "@material-ui/core";
import useBasicInfoForm from './hook';
import { getTodaysDate } from '../../helpers';

const BasicInfoForm = () => {
  const { dog } = useBasicInfoForm();

  return (
    <StyledRoot>
      <Grid item>
        <StyledImage component={ DogImage } size="sm" text={ dog.name } />
      </Grid>
      <Grid
        item
        sm={ 12 }
        lg={ 8 }
      >
        <Typography variant="h3">Basic Info</Typography>
        <TextField
          id="date"
          fullWidth
          label="date"
          type="date"
          name="currentDay"
          defaultValue={ getTodaysDate() }
          InputLabelProps={ {
            shrink: true
          } }
        />
        <TextField fullWidth label="weight" type="number" name="weight" />
      </Grid>
    </StyledRoot>
  );
};

export default BasicInfoForm;