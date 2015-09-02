'use strict';

class AddRemoveRows {
  constructor(tableId) {
    this.tableId = tableId;
    this.init();
  }

  init() {
    const addRowButton = document.getElementById('addRowButton');
    addRowButton.addEventListener('click', function() {
      this.addTableRow(this.tableId);
    }.bind(this));
  }

  addTableRow(tableID) {
    let rowCount = tableId.rows.length;
    let row = tableId.insertRow(rowCount);
    const nameBox = this.createTableElement('input', 'text', 'textName');
    const emailBox = this.createTableElement('input', 'text', 'textEmail');
    const saveButton = this.createTableElement('input', 'button', 'saveButton', 'Save');

    saveButton.addEventListener('click', function() {
      if (this.isTextFieldValid(nameBox) && this.isEmailFieldValid(emailBox)) {
        this.saveTableRow(row, nameBox, emailBox, saveButton);
      }
    }.bind(this));

    const elements = {
      name: nameBox,
      email: emailBox,
      save: saveButton,
    };

    this.insertTableCell(row, elements);
  }

  insertTableCell(row, elements) {
    Object.keys(elements).forEach( function(element, index) {
      row.insertCell(index).appendChild(elements[element]);
    });
  }

  createTableElement(element, type, identifier, value) {
    const tableElement = document.createElement(element);
    if (type !== null || name !== null || value !== null) {
      tableElement.type = type || '';
      tableElement.name = identifier || '';
      tableElement.value = value || '';
    }
    tableElement.id = identifier;
    tableElement.setAttribute('class', identifier)
    return tableElement;
  }

  isTextFieldValid(textField) {
    if (textField.value === null || textField.value === '') {
      alert(`You must enter a name before you can save`);
      return false;
    }
    return true;
  }

  isEmailFieldValid(emailField) {
    const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (emailField.value === null || emailField.value === '') {
      alert(`You must enter an email before you can save`);
      return false;
    } else if (!emailPattern.test(emailField.value)) {
      alert(`Please enter a valid email before you can save`);
      return false;
    }
    return true;
  }

  saveTableRow(row, nameBox, emailBox, saveButton) {
    const nameValue = document.createTextNode(nameBox.value);
    const emailValue = document.createTextNode(emailBox.value);
    const editButton = this.createTableElement('input', 'button', 'editButton', 'Edit');
    const deleteButton = this.createTableElement('input', 'button', 'deleteButton', 'Delete');
    const buttonElements = document.createDocumentFragment();
    buttonElements.appendChild(editButton);
    buttonElements.appendChild(deleteButton);

    editButton.addEventListener('click', function() {
      this.doEditTableRow(row, nameValue, emailValue);
    }.bind(this));

    deleteButton.addEventListener('click', function() {
      this.doDeleteTableRow(row);
    }.bind(this));

    row.cells[0].replaceChild(nameValue, nameBox);
    row.cells[1].replaceChild(emailValue, emailBox);
    row.cells[2].replaceChild(buttonElements, saveButton);
  }

  doDeleteTableRow(row) {
    if (confirm('Are you sure you want to delete this row?')) {
      this.tableId.deleteRow(row.rowIndex);
    }
  }

  doEditTableRow(row, nameValue, emailValue) {
    const nameBox = this.createTableElement('input', 'text', 'textName', nameValue.textContent);
    const emailBox = this.createTableElement('input', 'text', 'textEmail', emailValue.textContent);
    const saveButton = this.createTableElement('input', 'button', 'saveButton', 'Save');

    saveButton.addEventListener('click', function() {
      if (this.isTextFieldValid(nameBox) && this.isEmailFieldValid(emailBox)) {
        this.saveTableRow(row, nameBox, emailBox, saveButton);
      }
    }.bind(this));

    row.cells[0].replaceChild(nameBox, nameValue);
    row.cells[1].replaceChild(emailBox, emailValue);
    row.deleteCell(2);
    row.insertCell(2).appendChild(saveButton);

  }
}

const tableId = document.getElementById('dataTable');
new AddRemoveRows(tableId);
