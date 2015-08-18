'use strict';

class NamePrompt {
  constructor(windowWidth, windowHeight) {
    this.init();
  }

  init() {
    const _this = this;
    _this.promptUser();
  }

  promptUser() {
    const _this = this;
    let firstName = '';
    let lastName = '';
    do {
      firstName = prompt('Please Enter First Name', '');
      if (!_this.isEmpty(firstName)) {
        do {
          lastName = prompt('Please Enter Last Name', '');
          if (!_this.isEmpty(lastName)) {
            _this.displayMessage(firstName, lastName);
          }
        } while (_this.isEmpty(lastName));
      }
    } while (_this.isEmpty(firstName));
  }

  isEmpty(value) {
    if (value === null || value.trim() === '') {
      return true;
    }
    return false;
  }

  displayMessage(firstName, lastName) {
    alert(`Hello ${firstName} ${lastName}`);
    document.getElementById('greeting').innerHTML = `Hello ${firstName} ${lastName}`;
  }
}

new NamePrompt();
