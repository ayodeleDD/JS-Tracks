'use strict';

class FormValidator {
  constructor(myForm) {
    this.myForm = myForm;
    this.init();
  }

  init() {
    const _this = this;
    this.myForm.addEventListener('submit', function(formEvent) {
      _this.validateFormElements(formEvent);
    });
  }

  validateFormElements(formEvent) {
    const _this = this;
    const formElements = {
      email: document.getElementById('email'),
      url: document.getElementById('url'),
    };
    const patterns = {
      email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    };
    _this.validateTextBoxes(formEvent);
    _this.validateTextArea(formEvent);
    _this.validateCheckBox(formEvent);
    _this.validatePatterns(formEvent, patterns, formElements);
  }

  validateTextBoxes(formEvent) {
    const textboxes = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < textboxes.length; i++) {
      if (textboxes[i].value === '') {
        alert(`${textboxes[i].name} cannot be empty`);
        formEvent.preventDefault();
      }
    };
  }

  validateTextArea(formEvent) {
    const textarea = document.querySelector('textarea');
    if (textarea.value === '' || textarea.length < 50) {
      alert (`${textarea.name} field is either empty or less than 50 characters`);
      formEvent.preventDefault();
    }
  }

  validateCheckBox(formEvent) {
    const checkBox = document.getElementById('notifyCheckBox');
    if (checkBox.checked === false) {
      alert(`${checkBox.name} cannot be left unchecked`);
      formEvent.preventDefault();
    }
  }

  validatePatterns(formEvent, patterns, formElements) {
    Object.keys(formElements).some( function(element) {
      let id = formElements[element].id;
      let value = formElements[element].value;
      let name = formElements[element].name;
      if (value !== '' && patterns[id]) {
        if (!patterns[id].test(value)) {
          alert(`Please enter a valid ${name}`);
          formEvent.preventDefault();
        }
      }
    });
  }
}

const myForm = document.getElementById('myForm');
new FormValidator(myForm);
