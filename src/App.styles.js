import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '30px',
  paddingRight: '30px',
}))

export const StyledTopbar = styled('header')(({ theme }) => ({
  width: '100%',
  paddingTop: '30px',
  paddingBottom: '30px',
  backgroundColor: theme.backgroundColor,
}))