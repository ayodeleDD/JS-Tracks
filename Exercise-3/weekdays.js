'use strict';

class ShowChecked {

  constructor(myForm, checkBoxLimit) {
    this.checkBoxArray = []; //Empty Array to hold checked checkboxes
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
        _this.verifyMax(formElement, this.checkBoxLimit);
      } else {
        _this.removeUnchecked(formElement);
      }
    }
  }

  verifyMax(formElement, checkBoxLimit) {
    const _this = this;
    const checkBoxNone = document.getElementById('none');
    if (formElement.id === 'none') {
      _this.clearChecked();
    } else {
      checkBoxNone.checked = false;
      if (this.checkBoxArray.length >= this.checkBoxLimit) {
        _this.showWarning(formElement, this.checkBoxLimit);
      } else {
        this.checkBoxArray.push(formElement);
      }
    }
  }

  showWarning(formElement, checkBoxLimit) {
    this.checkBoxArray.length = checkBoxLimit;
    formElement.checked = false;
    let days = [];
    for (let i = this.checkBoxArray.length - 1; i >= 0; i--) {
      days.push(this.checkBoxArray[i].value);
    };
    alert(`Only ${checkBoxLimit} days can be selected. You have already selected ${days.join(', ')}`);
  }

  clearChecked() {
    const weekdayCheckBox = document.getElementsByClassName('weekday');
    for (let i = weekdayCheckBox.length - 1; i >= 0; i--) {
      weekdayCheckBox[i].checked = false;
    };
    this.checkBoxArray = [];  //Resets Array
  }

  removeUnchecked(formElement) {
    const indexOfBox = this.checkBoxArray.indexOf(formElement);
    this.checkBoxArray.splice(indexOfBox, 1); //Remove Unchecked Checkbox
  }
}

const form = document.getElementById('myform');
new ShowChecked(form, 3);
