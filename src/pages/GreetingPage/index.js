import { Grid } from "@material-ui/core";
import { Page, Button } from "../../components";
import { GreetingMessage } from "../../features";
import { StyledRoot } from './styles';
import { useHistory } from "react-router-dom";

export default function GreetingPage() {
  const history = useHistory();

  return (
    <Page>
      <StyledRoot>
        <GreetingMessage />
        <Grid>
          <Button onClick={ () => history.push('/logging-info-1') }>Start Logging</Button>
        </Grid>
      </StyledRoot>
    </Page>
  );
}