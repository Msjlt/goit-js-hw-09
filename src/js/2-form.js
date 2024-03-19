'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = 'feedback-form-state';

const storedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
emailInput.value = storedState.email || '';
messageInput.value = storedState.message || '';

form.addEventListener('input', evt => {
  const state = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (emailValue && messageValue) {
    console.log({ email: emailValue, message: messageValue });
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
