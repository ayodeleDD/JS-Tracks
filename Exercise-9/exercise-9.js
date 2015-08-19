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
    for (let i = fromBox.options.length - 1; i >= 0; i--) {
      let selectedOptions = fromBox.options[i];
      if (selectedOptions.selected) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(selectedOptions.value));
        option.value = selectedOptions.value;
        toBox.appendChild(option);
        selectedOptions.remove(fromBox.selectedIndex);
      }
    };
  }
}

const addButton = document.querySelector('button[id="buttonAdd"]');
const removeButton = document.querySelector('button[id="buttonRemove"]');
new CountryMover(addButton, removeButton);
