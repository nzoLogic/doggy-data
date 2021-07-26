import { useEffect } from 'react';
import { StyledMain } from './styles';
import { useDispatch } from 'react-redux';
import { actions } from '../../store';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function Page(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isGreeting = useRouteMatch("/greeting");
  const isLoggingInfo = useRouteMatch("/logging-info-*");
  const isProfile = useRouteMatch("/profile");

  const needsUserCheck = (
    isGreeting ||
    isLoggingInfo ||
    isProfile
  );

  useEffect(() => {
    if (needsUserCheck) {
      dispatch(actions.isNewUser(history));
    }
  });
  return (
    <StyledMain>
      { props.children }
    </StyledMain>
  );
}