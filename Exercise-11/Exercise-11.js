'use strict';

class NumberValidator {
  constructor(myForm) {
    this.myForm = myForm;
    this.init();
  }

  init() {
    const _this = this;
    const numberPattern = /^[0-9]*(?:\.\d{1,2})?$/;
    const numberTextField = document.getElementById('number');
    const resultTextField = document.getElementById('result');
    this.myForm.addEventListener('submit', function(formEvent) {
      _this.validateNumber(formEvent, numberPattern, numberTextField, resultTextField);
    });
  }

  validateNumber(formEvent, numberPattern, numberTextField, resultTextField) {
    if (!numberPattern.test(numberTextField.value)) {
      resultTextField.value = 'False';
      numberTextField.focus();
      formEvent.preventDefault();
    } else if (numberTextField.value === '') {
      numberTextField.focus();
      resultTextField.value = 'Nothing to validate';
      formEvent.preventDefault();
    } else {
      resultTextField.value = 'True';
      formEvent.preventDefault();
      setTimeout(function () {
        this.myForm.submit();
      }, 5000); //setTimeout delays submission of form for 5 seconds to show result value
    }
  }
}

const myForm = document.getElementById('myForm');
new NumberValidator(myForm);
