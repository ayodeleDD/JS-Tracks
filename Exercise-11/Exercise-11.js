'use strict';

class NumberValidator {
  constructor(myForm) {
    this.myForm = myForm;
    this.init();
  }

  init() {
    const _this = this;
    const numberPattern = /^[0-9]*(?:\.\d{1,2})?$/;
    this.myForm.addEventListener('submit', function(formEvent) {
      _this.validateField(formEvent, numberPattern);
    });
  }

  validateField(formEvent, numberPattern) {
    const _this = this;
    const numberTextField = document.getElementById('number');
    const resultTextField = document.getElementById('result');
    if (numberTextField.value.trim() === '') {
      numberTextField.focus();
      resultTextField.value = 'Nothing to validate';
      formEvent.preventDefault();
    } else {
      _this.validateNumber(formEvent, numberPattern);
    }
  }

  validateNumber(formEvent, numberPattern) {
    const numberTextField = document.getElementById('number');
    const resultTextField = document.getElementById('result');
    if (!numberPattern.test(numberTextField.value.trim())) {
      resultTextField.value = 'False';
      numberTextField.focus();
      formEvent.preventDefault();
    } else {
      resultTextField.value = 'True';
      formEvent.preventDefault();
      setTimeout(function () {
        this.myForm.submit();
      }, 10000); //setTimeout delays submission of form for 10 seconds to show result value
    }
  }
}

const myForm = document.getElementById('myForm');
new NumberValidator(myForm);
