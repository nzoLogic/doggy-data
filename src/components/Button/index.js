import { Button as MuiButton } from '@material-ui/core';

export default function Button(props) {
  return (
    <MuiButton variant="contained" { ...props } />
  )
}