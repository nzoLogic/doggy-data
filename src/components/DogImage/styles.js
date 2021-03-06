import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '16px',
  width: '100%'
}));

export const StyledImageContainer = styled('div')(({ theme, modifiers }) => ({
  backgroundColor: theme.yellow,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...(modifiers.size === "md" && {
    height: '202px',
    width: '202px',
  }),
  ...(modifiers.size === "sm" && {
    height: '80px',
    width: '80px'
  })
}));

export const StyledImage = styled('img')(({ theme, modifiers }) => ({
  ...(modifiers.size === "md" && {
    width: '104px',
    height: '119px'
  }),
  ...(modifiers.size === "sm" && {
    height: '52px',
    width: '45px',
  })
}));

export const StyledTypography = styled('span')(({ theme }) => ({
  padding: '8px',
  ...theme.text.primary
}));