import { Form as ReactFinalForm } from 'react-final-form';

export default function Form({ handleSubmit, ...props }) {

  return (
    <ReactFinalForm onSubmit={ () => { console.log('hey') } } { ...props } />
  )
}


