'use strict';

class UrlOpener {
  constructor(windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    this.init();
  }

  init() {
    const _this = this;
    const windowFeatures = `width=${this.windowWidth},height=${this.windowHeight},menubar=no,location=no,resizable=no,scrollbars=no,status=no`;
     window.addEventListener('load', _this.popUp(windowFeatures));
  }

  popUp(windowFeatures) {
    let url = prompt('Please Enter URL? (http://www.example.com)', 'http://');
    if (url !== null) {
      if (!this.urlPattern.test(url)) {
        alert('Invalid URL provided. Bye!');
      } else {
        if (url.search('http://')) {
          url = `http:\/\/${url}`;
        }
        window.open(url, '_blank', windowFeatures);
      }
    } else {
      alert('URL not provided. Bye!');
    }
  }
}

new UrlOpener(400, 450);