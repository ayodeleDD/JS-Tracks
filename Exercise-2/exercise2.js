'use strict';

class ToggleCheckBoxes {
  constructor(buttons) {
    this.buttons = buttons;
    this.init();
  }

  init() {
    const _this = this;
    for (let i = this.buttons.length - 1; i >= 0; i--) {
      this.buttons[i].addEventListener('click', function(e) {
        const linkButton = e.target;
        (linkButton.id === 'buttonCheck') ? _this.toggleCheckBox(true) : _this.toggleCheckBox(false);
      });
    };
  }

  toggleCheckBox(state) {
    const boxes = document.getElementsByClassName('color');
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].checked = state;
    }
  }
}

const chkBoxes = document.getElementsByClassName('button');
new ToggleCheckBoxes(chkBoxes);
