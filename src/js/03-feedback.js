import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitForm = document.querySelector('button');

let formData = {};
let savedData;
form.addEventListener('input', throttle(onInput, 500));

submitForm.addEventListener('click', onSubmitForm);

function onInput(e) {
  if (!e.currentTarget) {
    return;
  }

  const {
    elements: { email, message },
  } = e.currentTarget;

  formData = { email: email.value, message: message.value };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

textarea();
function textarea() {
  const savedTextData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!savedTextData) {
    return;
  }

  form.email.value = savedTextData.email;
  form.message.value = savedTextData.message;
}

function onSubmitForm(e) {
  e.preventDefault();
  if (!form.email.value || !form.message.value) {
    return alert('the field must to be filled');
  }

  const dataArray = localStorage.getItem('feedback-form-state');
  savedData = JSON.parse(dataArray);

  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
  console.log(savedData);
}
