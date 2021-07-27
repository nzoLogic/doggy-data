import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(() => ({
  marginTop: '32px'
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '16px',
  alignItems: 'center',
  height: '100%',
}));