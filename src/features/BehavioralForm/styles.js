import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '2fr 2fr 2fr 2fr',
  gridGap: '12px',
  width: '100%'
}));

export const StyledBehavior = styled('div')(({ theme, modifiers }) => ({
  backgroundColor: '#B69593',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.text.secondary,
  height: '80px',
  textAlign: 'center',
  width: '80px',
  ...(modifiers.active && {
    backgroundColor: theme.button.primary
  }),
}));