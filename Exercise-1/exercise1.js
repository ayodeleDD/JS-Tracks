'use strict';

class User {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }

  compare(age) {
    let text = '';
    const userA = parseInt(this.age);
    const userB = parseInt(age);

    let comparison = (userA > userB) ? 
      (text = user1.fullName + ' is older than ' + user2.fullName) : 
      (text = user2.fullName + ' is older than ' + user1.fullName);

    document.getElementById('age-result').innerHTML = comparison;
  }
}

const user1 = new User('John Doe', '9');
const user2 = new User('Mary Abu', '30');

user1.compare(user2.age);