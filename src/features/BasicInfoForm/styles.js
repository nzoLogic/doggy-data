import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'column'
}));

export const StyledImage = styled('div')(() => ({
  width: '80px',
  height: '80px'
}));

export const StyledSection = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));