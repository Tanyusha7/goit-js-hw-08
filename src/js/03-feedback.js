import throttle from 'lodash.throttle';
console.log(throttle);
const form = document.querySelector('.feedback-form');
console.dir(form);

// const submitForm = document.querySelector('button');
// console.log(submitForm);

const formData = {};

form.addEventListener('input', throttle(onInput, 500));

// submitForm.addEventListener('submit', onSubmitForm);

function onInput(e) {
  e.preventDefault();
  const inputValue = e.target.name;
  console.log(inputValue);
  console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log('poluchem dani');
}

const dataArray = localStorage.getItem('feedback-form-state');
let savedData = JSON.parse(dataArray);

console.log('otpravlyaem');

textarea();
function textarea() {
  const savedText = localStorage.getItem('feedback-form-state');
  console.log(savedText);
  //   if (savedText) {
  //     form.value = savedData;
  //   }
}

form.reset();
localStorage.removeItem('feedback-form-state');
console.log(savedData);
//   const {
//     elements: { email, message },
//   } = e.currentTarget;
//   if (!email.value) {
//     return alert('the field must to be filled');
//   }
//   console.log(email.value, message.value);
//   const userData = {
//     email: email.value,
//     message: message.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(userData));

//   console.log(userData);
