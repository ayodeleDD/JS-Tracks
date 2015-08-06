'use strict';

class showChecked {

  constructor(myForm) {
    this.checkBoxArray = []; //Empty Array to hold checked checkboxes
    this._form = myForm; //Form Tag ID
    this.init();
  }

  init() {
    const _this = this;
    const cbArray = this.checkBoxArray; //Array of Checked Checkboxes

    this._form.addEventListener('click', function(e) {
      const formElement = e.target;

      if (formElement.id) {
        if (formElement.checked) {
          _this.verifyMax(formElement);
        } else {
          const indexOfBox = cbArray.indexOf(formElement);
          cbArray.splice(indexOfBox, 1); //Remove Unchecked Checkbox
        }
      }
    });
  }

  verifyMax(formElement) {
    const _this = this;
    const cbArray = this.checkBoxArray;
    const checkBoxNone = document.getElementById('none');

    if (formElement.id === 'none') {
      _this.clearChecked();
    } else {
      checkBoxNone.checked = false;
      if (cbArray.length >= 3) {
        alert(`Only 3 days can be selected. You have already selected ${cbArray[0].value}, ${cbArray[1].value}, ${cbArray[2].value}.`);
        formElement.checked = false;
      } else {
        cbArray.push(formElement);
      }
    }
  }

  clearChecked() {
    const wkdayCB = document.getElementsByName('weekday');

    for (var i = wkdayCB.length - 1; i >= 0; i--) {
      if (wkdayCB[i].id !== 'none') {
        wkdayCB[i].checked = false;
      }
    };
    this.checkBoxArray = [];  //Resets Array
  }
}

const form = document.getElementById('myform');
new showChecked(form);
