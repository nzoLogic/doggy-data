import {
  Page,
  Typography,
  Button,
} from '../../components';
import { DogProfileForm } from '../../features';
import { Grid } from '@material-ui/core';
import { StyledRoot } from './styles';

export default function NewDogPage() {
  return (
    <Page>
      <StyledRoot>
        <Grid container>
          <Grid item xs={ 8 }>
            <DogProfileForm />
          </Grid>
          <Grid item xs={ 4 }>
            <div style={ { padding: '16px' } }></div>
          </Grid>
        </Grid>
      </StyledRoot>
    </Page>
  )
}