'use strict';

// write code here
document.querySelectorAll('form').forEach((form) => {
  form.querySelectorAll('input').forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    // Отримуємо назву поля без конфлікту з глобальним name
    const fieldName = input.name;

    // Форматуємо текст: firstName -> First Name
    let displayName = fieldName.replace(/([A-Z])/g, ' $1').trim();

    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

    // Для пароля використовуємо стандартну назву
    if (input.type === 'password') {
      displayName = 'Password';
    }

    label.textContent = displayName;
    input.placeholder = displayName;

    // Вставляємо мітку перед полем
    input.parentNode.insertBefore(label, input);
  });
});
