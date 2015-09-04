'use strict';

class CountryMover {
  constructor(addButton, removeButton) {
    this.addButton = addButton;
    this.removeButton = removeButton;
    this.init();
  }

  init() {
    this.leftSideCountry = document.getElementById('leftSideCountry');
    this.rightSideCountry = document.getElementById('rightSideCountry');
    this.addButton.addEventListener('click', function() {
      if (!this.isBoxEmpty(leftSideCountry)) {
        this.moveSelectedOptions(leftSideCountry, rightSideCountry);
      }
    }.bind(this));

    this.removeButton.addEventListener('click', function() {
      if (!this.isBoxEmpty(rightSideCountry)) {
        this.moveSelectedOptions(rightSideCountry, leftSideCountry);
      }
    }.bind(this));
  }

  isOptionSelected(fromBox) {
    if (fromBox.selectedIndex === -1) {
      alert(`Please make a selection from ${fromBox.name}`);
      return false;
    }
    return true;
  }

  isBoxEmpty(fromBox) {
    if (fromBox.options.length !== 0) {
      this.isOptionSelected(fromBox);
      return false;
    }
    alert('No option to select from at this time');
    return true;
  }

  moveSelectedOptions(fromBox, toBox) {
    let selectedOption = fromBox.selectedOptions;
    for (let i = selectedOption.length - 1; i >= 0; i--) {
      toBox.add(selectedOption[i]);
    };
  }
}

const addButton = document.querySelector('button[id="buttonAdd"]');
const removeButton = document.querySelector('button[id="buttonRemove"]');
new CountryMover(addButton, removeButton);
