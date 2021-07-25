import {
  Page,
  DogImage
} from '../../components';
import { DogProfileForm } from '../../features';
import { Grid } from '@material-ui/core';
import { StyledRoot } from './styles';

export default function NewDogPage() {
  return (
    <Page>
      <StyledRoot>
        <Grid item xs={ 12 } md={ 8 }>
          <DogProfileForm />
        </Grid>
        <Grid item md={ 4 }>
          <DogImage defaultImage />
        </Grid>
      </StyledRoot>
    </Page>
  );
}