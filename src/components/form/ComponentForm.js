import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import semanticFormField from './SemanticFormField';
import validate from './FormValidate';

// const options = [
//   { key: '0', text: 'Option 1', value: '0' },
//   { key: '1', text: 'Option 2', value: '1' }
// ];

const ComponentForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)} error>
      {/* <Field name="selectExample" component={semanticFormField} as={Form.Select} options={options} label="Select label" placeholder="Select an option" /> */}
      <Field name="title" component={semanticFormField} as={Form.Input} type="text" label="Title" placeholder="Creat your catching title" />
      <Field name="categories" component={semanticFormField} as={Form.Input} type="text" label="Categories" placeholder="Seperate using a comma" />
      <Field name="content" component={semanticFormField} as={Form.TextArea} type="text" label="Post content" placeholder="Starting typing..." />
      <Button color="green">Post</Button>
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