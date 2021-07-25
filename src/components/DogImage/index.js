import dogImage from '../../assets/dog-image.png';
import Typography from '../Typography';
import {
  StyledRoot,
  StyledImage,
  StyledImageContainer,
  StyledTypography,
} from './styles';

const DogImage = ({ text }) => (
  <StyledRoot>
    <StyledImageContainer>
      <StyledImage src={ dogImage } />
    </StyledImageContainer>
    { text ?
      <StyledTypography variant="body1">{ text }</StyledTypography> :
      <>
        <StyledTypography variant="body1">FIDO</StyledTypography>
        <StyledTypography variant="body1">Golden Lab</StyledTypography>
        <StyledTypography variant="body1">5 years old</StyledTypography>
      </>
    }
  </StyledRoot>
);

export default DogImage;