import { Page, BasicInfoForm } from "../../features";
import { Button } from "../../components";
import { StyledRoot, StyledContainer } from './styles';
import { useHistory } from "react-router-dom";

export default function LoggingInfoPage() {
  const history = useHistory();

  return (
    <Page>
      <StyledRoot>
        <BasicInfoForm />
      </StyledRoot>
      <StyledContainer>
        <Button onClick={ e => history.push("/logging-info-2") }>Next</Button>
      </StyledContainer>
    </Page>
  );
}

