import { Page, BehavioralForm } from "../../features";
import { DogImage, Typography } from "../../components";
import { Grid } from "@material-ui/core";
import { StyledRoot, StyledTypography } from './styles';

const FoodAndBehaviorPage = () => {
  return (
    <Page>
      <StyledRoot>
        <Grid item>
          <DogImage size="sm" />
        </Grid>
        <Grid item sm={ 4 } xs={ 12 }>
          <StyledTypography component={ Typography } variant="h3">Behavioral</StyledTypography>
          <BehavioralForm />
        </Grid>
        <Grid item sm={ 4 } xs={ 12 } lg={ 6 }>

        </Grid>
      </StyledRoot>
    </Page>
  );
};

export default FoodAndBehaviorPage;