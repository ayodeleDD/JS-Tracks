'use strict';

class NumberValidator {
  constructor(submitButton, myForm) {
    this.submitButton = submitButton;
    this.myForm = myForm;
    this.init();
  }

  init() {
    const _this = this;
    const numberPattern = /^[0-9]*(?:\.\d{1,2})?$/;
    this.submitButton.addEventListener('click', function(formEvent) {
      if (!_this.validateField(formEvent, numberPattern)) {
        formEvent.preventDefault();
      }
    });
  }

  validateField(formEvent, numberPattern) {
    const _this = this;
    const numberTextField = document.getElementById('number');
    const resultTextField = document.getElementById('result');
    if (_this.isEmpty(numberTextField.value)) {
      numberTextField.focus();
      resultTextField.value = 'Nothing to validate';
      return false;
    } else {
      if (_this.isNumber(numberPattern)) {
        setTimeout(function () {
          this.myForm.submit();
        }, 10000); //setTimeout delays submission of form for 10 seconds to show result value
        return false;
      } else {
        return false;
      }
      return true;
    }
  }

  isNumber(numberPattern) {
    const numberTextField = document.getElementById('number');
    const resultTextField = document.getElementById('result');
    if (!numberPattern.test(numberTextField.value.trim())) {
      resultTextField.value = 'False';
      numberTextField.focus();
      return false;
    } else {
      resultTextField.value = 'True';
      return true;
    }
  }

  isEmpty(textField) {
    if (textField === null || textField.trim() === '') {
      return true;
    }
    return false;
  }
}

const submitButton = document.getElementById('submitButton');
const myForm = document.getElementById('myForm');
new NumberValidator(submitButton, myForm);
