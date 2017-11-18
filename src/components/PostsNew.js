import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, Form } from 'semantic-ui-react';

class PostsNew extends Component {
  renderField(field) {
    //Pass through event handlers from Redux form
    return (
      <div>
        <label>{field.label}</label>
        <input 
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <Header as='h2' content='New Post' />  
        <Link to='/'>
          <Button content='Cancel' color='red' icon='left arrow' labelPosition='left' />
        </Link>
        <Segment>
          <Header as='h3' content='Basic Redux-Form' /> 
          <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field label="Title" name="title" component={this.renderField} />
              <Field label="Categories" name="categories" component={this.renderField} />
              <Field label="Content" name="content" component={this.renderField} />
              <button type='submit'>Post</button>
          </form>
        </Segment>
      </div>
    )
  }
}

//Function called automatically by Redux-Form when user attempts to submit
//Passed to validate 
function validate(values) {
//values returns on object -> { title: 'asdf', categories: 'asdf', content: 'asdf'}
const errors = {};
//Validate the inputs from 'values'
if (!values.title || values.title.length < 3) {
  errors.title = "Enter a title containing atleast 3 characters!";
}
if (!values.categories) {
  errors.categories = "Enter some categories!";
}
if (!values.content) {
  errors.content = "Bummer, no post without content. Please enter some content!";
}
//If errors is empty, the form is fine to submit
//If errors has *any* properties, redux assumes form is invalid 
return errors;
}

export default reduxForm({
  validate, //same as validate:validate
  form: 'PostsNewForm',
})(PostsNew)