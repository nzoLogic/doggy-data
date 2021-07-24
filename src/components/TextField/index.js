import { TextField as MuiTextField } from '@material-ui/core';
import { Field as FinalField } from 'react-final-form';

export default function TextField(props) {
  return (
    <MuiTextField { ...props } />
  )
}