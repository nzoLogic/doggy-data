import { Page, BehavioralForm, DietarySlider } from "../../features";
import { DogImage, Typography, Button } from "../../components";
import { Grid } from "@material-ui/core";
import {
  StyledRoot,
  StyledTypography,
  StyledSection,
  StyledRow,
  StyledButtonWrapper
} from './styles';
import { useDogProfile } from "../../store/selectors";

const FoodAndBehaviorPage = () => {
  const dog = useDogProfile();

  return (
    <Page>
      <StyledRoot>
        <Grid item style={ { textAlign: 'center' } }>
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
        <StyledButtonWrapper>
          <Button>Next</Button>
        </StyledButtonWrapper>
      </StyledRoot>
    </Page>
  );
};

export default FoodAndBehaviorPage;