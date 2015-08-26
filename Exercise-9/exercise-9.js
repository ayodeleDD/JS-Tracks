'use strict';

class CountryMover {
  constructor(addButton, removeButton) {
    this.addButton = addButton;
    this.removeButton = removeButton;
    this.init();
  }

  init() {
    const _this = this;
    this.leftSideCountry = document.getElementById('leftSideCountry');
    this.rightSideCountry = document.getElementById('rightSideCountry');
    this.addButton.addEventListener('click', function() {
      if (!_this.isBoxEmpty(leftSideCountry)) {
        _this.moveSelectedOptions(leftSideCountry, rightSideCountry);
      }
    });

    this.removeButton.addEventListener('click', function() {
      if (!_this.isBoxEmpty(rightSideCountry)) {
        _this.moveSelectedOptions(rightSideCountry, leftSideCountry);
      }
    });
  }

  isOptionSelected(fromBox) {
    if (fromBox.selectedIndex === -1) {
      alert(`Please make a selection from ${fromBox.name}`);
      return false;
    }
    return true;
  }

  isBoxEmpty(fromBox) {
    const _this = this;
    if (fromBox.options.length !== 0) {
      _this.isOptionSelected(fromBox);
      return false;
    }
    alert('No option to select from at this time');
    return true;
  }

  moveSelectedOptions(fromBox, toBox) {
    const _this = this;
    let selectedOption = fromBox.selectedOptions;
    for (let i = selectedOption.length - 1; i >= 0; i--) {
      toBox.add(selectedOption[i]);
    };
  }
}

const addButton = document.querySelector('button[id="buttonAdd"]');
const removeButton = document.querySelector('button[id="buttonRemove"]');
new CountryMover(addButton, removeButton);
