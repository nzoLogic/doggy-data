import { StyledRoot, StyledImage, StyledSection } from './styles';
import { DogImage, Typography, TextField, } from '../../components';
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
      <StyledSection

      >
        <Typography variant="h3">Basic Info</Typography>
        <TextField
          id="date"
          label="date"
          type="date"
          name="currentDay"
          defaultValue={ getTodaysDate() }
        />
        <TextField label="weight" type="number" name="weight" />
      </StyledSection>
    </StyledRoot>
  );
};

export default BasicInfoForm;