'use strict';

// write code here
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const fieldName = input.name;
  let displayName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  if (input.type === 'password') {
    displayName = 'Password';
  }

  label.textContent = displayName;
  input.placeholder = displayName;

  input.parentElement.insertBefore(label, input);
});
