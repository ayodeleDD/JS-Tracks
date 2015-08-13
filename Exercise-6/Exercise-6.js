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
    const textboxes = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < textboxes.length; i++) {
      if (textboxes[i].value === '') {
        alert(`${textboxes[i].name} cannot be empty`);
        formEvent.preventDefault();
      }
    };
    const textarea = document.querySelector('textarea');
    if (textarea.value === '' || textarea.length < 50) {
      alert (`${textarea.name} field is either empty or less than 50 characters`);
      formEvent.preventDefault();
    }
    const checkBox = document.getElementById('notifyCheckBox');
    if (checkBox.checked === false) {
      alert(`${checkBox.name} cannot be left unchecked`);
      formEvent.preventDefault();
    }
  }
}

const myForm = document.getElementById('myForm');
new FormValidator(myForm);
