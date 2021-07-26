import dogImage from '../../assets/dog-image.png';
import {
  StyledRoot,
  StyledImage,
  StyledImageContainer,
  StyledTypography,
} from './styles';
import { showIf } from '../../helpers';

const DogImage = ({
  text,
  size = "md",
  defaultImage = false }) => (
  <StyledRoot>
    <StyledImageContainer modifiers={ { size } }>
      <StyledImage src={ dogImage } modifiers={ { size } } />
    </StyledImageContainer>
    { showIf(text)(() => (
      <StyledTypography variant="body1">{ text }</StyledTypography>
    ))
    }
    {
      showIf(defaultImage)(() => (
        <>
          <StyledTypography variant="body1">FIDO</StyledTypography>
          <StyledTypography variant="body1">Golden Lab</StyledTypography>
          <StyledTypography variant="body1">5 years old</StyledTypography>
        </>

      ))
    }

  </StyledRoot>
);

export default DogImage;