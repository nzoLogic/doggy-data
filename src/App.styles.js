import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  ...theme,
  height: '100vh'
}))