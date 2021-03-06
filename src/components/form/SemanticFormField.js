import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Message } from 'semantic-ui-react';

export default function semanticFormField ({ input, type, label, placeholder, meta: { touched, error, warning }, as: As = Input, ...props }) {
  function handleChange (e, { value }) {
    return input.onChange(value);
  }
  return (
    <Form.Field>
      <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder} onChange={handleChange} />
      {touched && error ?
          <Message
          error
          header='Missing content'
          content={error}
          /> : ''
      }
    </Form.Field>
  );
}

semanticFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object
};