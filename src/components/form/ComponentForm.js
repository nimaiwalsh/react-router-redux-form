import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import semanticFormField from './SemanticFormField';
import validate from './FormValidate';

const options = [
  { key: '0', text: 'Option 1', value: '0' },
  { key: '1', text: 'Option 2', value: '1' }
];

const ComponentForm = (props) => {
  return (
    <Form name="product" onSubmit={props.handleSubmit(props.onSubmit)}>
      <Field name="selectExample" component={semanticFormField} as={Form.Select} options={options} label="Select label" placeholder="Select an option" />
      <Field name="title" component={semanticFormField} as={Form.Input} type="text" label="Title" placeholder="Text Input" />
      <Field name="numberInputExample" component={semanticFormField} as={Form.Input} type="text" label="Number label" placeholder="Number Input" />
      <Field name="emailInputExample" component={semanticFormField} as={Form.Input} type="email" label="Email label" placeholder="Email Input" />
      <Button>Submit</Button>
    </Form>
  );
};

ComponentForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default reduxForm({
    form: 'yourComponent',
    validate,
  })(ComponentForm);