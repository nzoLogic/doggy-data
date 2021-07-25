import { useEffect } from 'react';
import { StyledMain } from './styles';
import { useDispatch } from 'react-redux';
import { actions } from '../../store';
import { useHistory } from 'react-router-dom';

export default function Page(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.isNewUser());
  });
  return (
    <StyledMain>
      { props.children }
    </StyledMain>
  );
}