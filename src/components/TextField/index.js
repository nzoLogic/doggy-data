import { TextField as MuiTextField } from '@material-ui/core';
import { Field as FinalField } from 'react-final-form';

export default function TextField({ label, name, ...props }) {
  return (
    <FinalField name={ name } label={ label }>
      { (({ input, ...rest }) => (
        <MuiTextField input={ input } { ...rest } />
      )) }
    </FinalField>
  )
}