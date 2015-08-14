'use strict';

class NamePrompt {
  constructor(windowWidth, windowHeight) {
    this.init();
  }

  init() {
    const _this = this;
    window.addEventListener('load', _this.promptUser());
  }

  promptUser() {
    let firstName = '';
    let lastName = '';
    do {
      firstName = prompt('Please Enter First Name', '');
      lastName = prompt('Please Enter Last Name', '');
      if (firstName && lastName) {
        alert(`Hello ${firstName} ${lastName}`);
        document.getElementById('greeting').innerHTML = `Hello ${firstName} ${lastName}`;
      }
    } while (!firstName && !lastName);
  }
}

new NamePrompt();