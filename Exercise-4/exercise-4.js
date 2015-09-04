'use strict';

class DisplayAndHide {
  constructor(parentCheckBox) {
    this.parentCheckBox = parentCheckBox; //Gets the Parent CheckBox
    this.init();
  }

  init() {
    const parentCheckBox = this.parentCheckBox;
    for (let i = parentCheckBox.length - 1; i >= 0; i--) {
      parentCheckBox[i].addEventListener('click', function(e) {
        const parentElement = e.target;
        if (parentElement.checked) {
          this.toggleChildren(parentElement, true, 'block');
        } else {
          this.toggleChildren(parentElement, false, 'none');
        }
      }.bind(this));
    };
  }

  toggleChildren(parentElement, state, toggleDisplay) {
    const siblingId = document.getElementById(`${parentElement.id}Sibling`); //Gets the parent sibling ID
    siblingId.style.display = toggleDisplay;
    const silbingCheckBox = siblingId.querySelectorAll('input[type=checkbox]'); //Gets all sibling checkboxes by sibling ID
    for (let i = silbingCheckBox.length - 1; i >= 0; i--) {
      silbingCheckBox[i].checked = state;
    };
    siblingId.scrollIntoView({behavior: 'smooth'});
  }
}

const parentCheckBox = document.getElementsByClassName('parentCheckBox');
new DisplayAndHide(parentCheckBox);
