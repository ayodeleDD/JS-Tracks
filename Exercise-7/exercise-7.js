'use strict';

class NamePrompt {
  constructor(windowWidth, windowHeight) {
    this.init();
  }

  init() {
    this.promptUser();
  }

  promptUser() {
    let firstName = '';
    let lastName = '';
    do {
      firstName = prompt('Please Enter First Name', '');
    } while (this.isEmpty(firstName));
    do {
      lastName = prompt('Please Enter Last Name', '');
    } while (this.isEmpty(lastName));

    this.displayMessage(firstName, lastName);
  }

  isEmpty(value) {
    if (value === null || value.trim() === '') {
      return true;
    }
    return false;
  }

  displayMessage(firstName, lastName) {
    alert(`Hello ${firstName} ${lastName}`);
    document.getElementById('greeting').textContent = `Hello ${firstName} ${lastName}`;
  }
}

new NamePrompt();
