import { Grid } from "@material-ui/core";
import { Page, Button } from "../../components";
import { GreetingMessage } from "../../features";

export default function GreetingPage() {


  return (
    <Page>
      <GreetingMessage />
      <Grid>
        <Button>Start Logging</Button>
      </Grid>
    </Page>
  );
}