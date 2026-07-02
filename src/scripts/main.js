'use strict';

// write code here
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const fieldName = input.name;
  let displayName = fieldName.replace(/([A-Z])/g, ' $1').trim();

  displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  label.textContent = displayName;
  input.placeholder = displayName;

  input.parentElement.insertBefore(label, input);
});
