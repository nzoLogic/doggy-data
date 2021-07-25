import { DogImage } from "../../components";
import useGreetingMessage from "./hook";

const GreetingMessage = () => {
  const { dog } = useGreetingMessage();
  return (
    <>
      <DogImage text={ `We're excited to meet ${ dog.name }` } />
    </>
  );
};

export default GreetingMessage;