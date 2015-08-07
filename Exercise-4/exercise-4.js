'use strict';

class displayAndHide {
  constructor(parentCB) {
    this.parentCB = parentCB; //Gets the Parent CheckBox
    this.init();
  }

  init() {
    const parentCB = this.parentCB;
    const _this = this;

    for (let i = parentCB.length - 1; i >= 0; i--) {
      parentCB[i].addEventListener('click', function(e) {
        const parentElement = e.target;
        if (parentElement.checked) {
          _this.toggleChildren(parentElement, true, 'block');
        } else {
          _this.toggleChildren(parentElement, false, 'none');
        }
      });
    };
  }

  toggleChildren(parentElement, state, visibility) {
    const siblingId = document.getElementById(`${parentElement.id}Sibling`); //Gets the parent sibling ID
    siblingId.style.display = visibility;
    const silbingCheckBox = siblingId.querySelectorAll('input[type=checkbox]'); //Gets all sibling checkboxes by sibling ID

    for (let i = silbingCheckBox.length - 1; i >= 0; i--) {
      silbingCheckBox[i].checked = state;
    };
    siblingId.scrollIntoView({behavior: 'smooth'});
  }
}

const parentCB = document.getElementsByClassName('parentCB');
new displayAndHide(parentCB);