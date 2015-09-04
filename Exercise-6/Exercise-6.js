'use strict';

class FormValidator {
  constructor(myForm) {
    this.myForm = myForm;
    this.init();
  }

  init() {
    this.myForm.addEventListener('submit', function(formEvent) {
      this.validateFormElements(formEvent);
    }.bind(this));
  }

  validateFormElements(formEvent) {
    if (this.validateTextBoxes() || this.validateTextArea() || this.validateCheckBox()) {
      formEvent.preventDefault();
    }
  }

  validateTextBoxes() {
    const textboxes = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < textboxes.length; i++) {
      if (this.isEmpty(textboxes[i].value)) {
        alert(`${textboxes[i].name} cannot be empty`);
        return true;
      }
    };
    return false;
  }

  validateTextArea() {
    const textarea = document.querySelector('textarea');
    if (this.isEmpty(textarea.value) || this.checkTextAreaLength(textarea, 50)) {
      alert (`${textarea.name} field is either empty or less than 50 characters`);
      return true;
    }
    return false;
  }

  validateCheckBox() {
    const checkBox = document.getElementById('notifyCheckBox');
    if (this.isChecked(checkBox)) {
      alert(`${checkBox.name} cannot be left unchecked`);
      return true;
    }
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
