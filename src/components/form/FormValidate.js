//Function called automatically by Redux-Form when user attempts to submit
//Passed to validate 
export default function validate(values) {
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
    errors.content = "Bummer, a post without content. Please enter some content!";
  }
  //If errors is empty, the form is fine to submit
  //If errors has *any* properties, redux assumes form is invalid 
  return errors;
  }