import { DogImage } from "../../components";
import useGreetingMessage from "./hook";
import { StyledRoot } from './styles';

const GreetingMessage = () => {
  const { dog } = useGreetingMessage();
  return (
    <StyledRoot>
      <DogImage text={ `We're excited to meet ${ dog.name }` } />
    </StyledRoot>
  );
};

export default GreetingMessage;