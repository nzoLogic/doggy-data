import { useDogProfile } from "../../store/selectors";

const useGreetingMessage = () => {
  const dog = useDogProfile();

  return {
    dog
  };
};

export default useGreetingMessage;