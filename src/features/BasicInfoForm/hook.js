import { selectors } from '../../store';

const useBasicInfoForm = () => {
  const dog = selectors.useDogProfile();

  return {
    dog
  };
};

export default useBasicInfoForm;