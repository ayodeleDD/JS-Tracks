'use strict';

class UrlChecker {
  constructor(submitButton) {
    this.submitButton = submitButton;
    this.init();
  }

  init() {
    const _this = this;
    const urlTestPattern = /^(https?:\/\/)?(www?.)?([^.\/.]+(?=\.)|)(\.?[^\/.]+\.[^\/]+)\/?(.+|)$/;
    const urlExtractPattern = /^(?:https?:\/\/)?(?:www?.)?([^.\/.]+(?=\.)|)(\.?[^\/.]+\.[^\/]+)\/?(.+|)$/;
    this.submitButton.addEventListener('click', function(formEvent) {
      const urlInputField = document.getElementById('url');
      if (!_this.isEmpty(urlInputField) && _this.isValid(urlInputField, urlTestPattern)) {
        _this.extractDomain(urlInputField, urlExtractPattern);
      } else {
        formEvent.preventDefault();
      }
    });
  }

  isEmpty(inputField) {
    if (inputField.value === null || inputField.value.trim() === '') {
      alert(`URL Field cannot be empty`);
      inputField.focus();
      return true;
    }
    return false;
  }

  isValid(inputField, urlTestPattern) {
    if (!urlTestPattern.test(inputField.value)) {
      alert('Invalid URL');
      return false;
    }
    return true;
  }

  extractDomain(urlInputField, urlExtractPattern) {
    let match = urlExtractPattern.exec(urlInputField.value);
    if (match !== null) {
      if (match[1] === null || match[1] === '') {
        alert(`Domain: ${match[2]}`);
      } else {
        alert(`Domain: ${match[2].replace('.', '')}`);
        alert(`Subdomain: ${match[1]}`);
      }
    }
  }
}

const submitButton = document.getElementById('submitButton');
new UrlChecker(submitButton);
