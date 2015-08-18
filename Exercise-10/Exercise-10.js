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
    if (_this.validateTextBoxes() || _this.validateTextArea() || _this.validateCheckBox() || _this.validatePatterns(formEvent, patterns, formElements)) {
      formEvent.preventDefault();
    }
  }

  validateTextBoxes() {
    const _this = this;
    const textboxes = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < textboxes.length; i++) {
      if (_this.isEmpty(textboxes[i].value)) {
        alert(`${textboxes[i].name} cannot be empty`);
        return true;
      }
    };
    return false;
  }

  validateTextArea() {
    const _this = this;
    const textarea = document.querySelector('textarea');
    if (_this.isEmpty(textarea.value) || _this.checkTextAreaLength(textarea, 50)) {
      alert (`${textarea.name} field is either empty or less than 50 characters`);
      return true;
    }
    return false;
  }

  validateCheckBox() {
    const _this = this;
    const checkBox = document.getElementById('notifyCheckBox');
    if (_this.isChecked(checkBox)) {
      alert(`${checkBox.name} cannot be left unchecked`);
      return true;
    }
    return false;
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
          return true;
        }
      }
    });
    return false;
  }

  isEmpty(value) {
    if (value === null || value.trim() === '') {
      return true;
    }
    return false;
  }

 checkTextAreaLength(textarea, areaLength) {
  if (textarea.length < areaLength) {
    return true;
  }
  return false;
 }

 isChecked(checkbox) {
  if(checkbox.checked === false) {
    return true;
  }
  return false;
 }
}

const myForm = document.getElementById('myForm');
new FormValidator(myForm);
