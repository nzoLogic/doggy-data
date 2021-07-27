import { useEffect } from 'react';
import { StyledMain } from './styles';
import { useDispatch } from 'react-redux';
import { actions } from '../../store';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDogProfile } from '../../store/selectors';

export default function Page(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isGreeting = useRouteMatch("/greeting");
  const isLoggingInfo = useRouteMatch("/logging-info-1");
  const isLoggingInfo2 = useRouteMatch("/logging-info-2");
  const isProfile = useRouteMatch("/profile");
  const { name } = useDogProfile();

  const needsUserCheck = (
    isGreeting ||
    isLoggingInfo ||
    isLoggingInfo2 ||
    isProfile
  );

  useEffect(() => {
    if (needsUserCheck && !name) {
      dispatch(actions.isNewUser(history));
    }
  });
  return (
    <StyledMain>
      { props.children }
    </StyledMain>
  );
}