'use strict';

class ShowChecked {

  constructor(myForm, checkBoxLimit) {
    this._form = myForm; //Form Tag ID
    this.checkBoxLimit = checkBoxLimit;
    this.init();
  }

  init() {
    const _this = this;
    this._form.addEventListener('click', function(e) {
      _this.eventHandler(e);
    });
  }

  eventHandler(e) {
    const formElement = e.target;
    const _this = this;
    if (formElement.type) {
      if (formElement.checked) {
        if (formElement.id === 'none') {
          _this.clearChecked();
        } else {
          _this.verifyMax(formElement);
        }
      }
    }
  }

  verifyMax(formElement) {
    const _this = this;
    const none = document.getElementById('none');
    if (none.checked === true) {
      none.checked = false;
    }
    const validCheckedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (validCheckedBoxes.length > this.checkBoxLimit) {
      _this.showWarning(formElement);
    }
  }

  showWarning(formElement) {
    formElement.checked = false;
    const validCheckedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let validCheckedValue = '';
    for (let i = 0; i < validCheckedBoxes.length; i++) {
      validCheckedValue += `${validCheckedBoxes[i].value} `;
    }
    alert(`Only ${this.checkBoxLimit} days can be selected. You have already selected ${validCheckedValue}`);
  }

  clearChecked() {
    const weekdayCheckBox = document.getElementsByClassName('weekday');
    for (let i = weekdayCheckBox.length - 1; i >= 0; i--) {
      weekdayCheckBox[i].checked = false;
    }
  }
}

const form = document.getElementById('myform');
new ShowChecked(form, 3);
