import { StyledMain } from './styles';

export default function Page(props) {
  return (
    <StyledMain>
      { props.children }
    </StyledMain>
  );
}