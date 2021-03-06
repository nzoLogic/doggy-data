import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.button.primary,
  color: theme.text.secondary,
  height: '56px',
  '&:hover': {
    backgroundColor: theme.teal,
  }
}));