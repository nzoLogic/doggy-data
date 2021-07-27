import { TextField as MuiTextField } from '@material-ui/core';

export default function TextField(props) {
  return (
    <MuiTextField { ...props } style={ { minWidth: '436px' } } />
  );
}