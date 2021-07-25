import { styled } from '@material-ui/core/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  marginLeft: '16px',
  marginRight: '16px'
}));
export const StyledDogProfileForm = styled('form')(({ theme }) => ({
  display: 'grid',
  rowGap: '32px',
}));

export const StyledButton = styled('button')(({ theme }) => ({
  justifySelf: 'end'
}));