import { Page, BehavioralForm, DietarySlider } from "../../features";
import { DogImage, Typography, Button } from "../../components";
import { Grid } from "@material-ui/core";
import { StyledRoot, StyledTypography, StyledSection, StyledRow } from './styles';
import { useDogProfile } from "../../store/selectors";

const FoodAndBehaviorPage = () => {
  const dog = useDogProfile();

  return (
    <Page>
      <StyledRoot>
        <Grid item justifyContent="center" alignItems="center" style={ { textAlign: 'center' } }>
          <DogImage size="sm" />
          <Typography>{ dog.name }</Typography>
        </Grid>
        <StyledRow>
          <StyledSection>
            <StyledTypography component={ Typography } variant="h3">Behavioral</StyledTypography>
            <BehavioralForm />
          </StyledSection>
          <StyledSection>
            <StyledTypography component={ Typography } variant="h3">Dietary & Digestional</StyledTypography>
            <DietarySlider />
          </StyledSection>
        </StyledRow>
        <Button>Next</Button>
      </StyledRoot>
    </Page>
  );
};

export default FoodAndBehaviorPage;