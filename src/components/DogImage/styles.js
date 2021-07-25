import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '16px',
  width: '100%'
}));

export const StyledImageContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.yellow,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '202px',
  width: '202px',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '104px',
  height: '119px'
}));

export const StyledTypography = styled('span')(({ theme }) => ({
  padding: '8px',
  ...theme.text.primary
}));