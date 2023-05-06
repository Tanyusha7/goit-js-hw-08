import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitForm = document.querySelector('button');

let formData = {};
let savedData;
form.addEventListener('input', throttle(onInput, 500));

submitForm.addEventListener('click', onSubmitForm);

function onInput(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  const dataArray = localStorage.getItem('feedback-form-state');

  savedData = JSON.parse(dataArray);
}

textarea();
function textarea() {
  const savedText = localStorage.getItem('feedback-form-state');
  const savedTextData = JSON.parse(savedText);

  if (savedTextData) {
    form.email.value = savedTextData.email;
    form.message.value = savedTextData.message;
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  if (!form.email.value || !form.message.value) {
    return alert('the field must to be filled');
  }

  localStorage.getItem('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
  console.log(savedData);
}
