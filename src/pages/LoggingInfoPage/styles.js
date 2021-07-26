import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(() => ({
  marginTop: '32px'
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '16px'
}));