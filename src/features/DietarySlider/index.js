import { Slider } from '@material-ui/core';
import { Typography } from '../../components';
import { StyledRoot, StyledSlider } from './styles';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  }
];

const DietarySlider = () => {
  return (
    <StyledRoot>
      <Typography>APPETITE</Typography>
      <StyledSlider
        component={ Slider }
        defaultValue={ 0 }
        steps={ 5 }
        valueLabelDisplay="auto"
        marks
        min={ 0 }
        max={ 5 }
        marks={ marks }
      />
      <Typography>WATER</Typography>
      <StyledSlider
        component={ Slider }
        defaultValue={ 0 }
        steps={ 5 }
        valueLabelDisplay="auto"
        marks
        min={ 0 }
        max={ 5 }
        marks={ marks }
      />
      <Typography>Restroom</Typography>
      <StyledSlider
        component={ Slider }
        defaultValue={ 0 }
        steps={ 5 }
        valueLabelDisplay="auto"
        marks
        min={ 0 }
        max={ 5 }
        marks={ marks }
      />
    </StyledRoot>
  );
};

export default DietarySlider;