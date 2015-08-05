'use strict';

class CheckBoxes {
  constructor(checkboxes) {
    this.checkboxes = checkboxes;
    this.init();
  }

  init() {
    const selectAll = document.getElementById('btn-check');
    const selectNone = document.getElementById('btn-unCheck');
    const boxes = this.checkboxes;

    selectAll.addEventListener('click', function() {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].checked = true;
      }
    });

    selectNone.addEventListener('click', function() {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].checked = false;
      }
    });
  }

}

const chkBoxes = document.getElementsByName('color');
new CheckBoxes(chkBoxes);