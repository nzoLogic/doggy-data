import { styled } from "@material-ui/core/styles";

export const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const StyledTypography = styled('span')(({ theme }) => ({
  marginBottom: '46px'
}));

export const StyledSection = styled('div')(() => ({
  // width: '50%',
}));

export const StyledRow = styled('div')(() => ({
  display: 'flex',
  marginTop: '64px',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}));

export const StyledButtonWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '48px',
}));