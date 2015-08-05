'use strict';

class User {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = parseInt(age, 10);
  }

  compare(user2) {
    let ageDiff;

    if (this.age > user2.age) {
      ageDiff = `${this.fullName} is older than ${user2.fullName}`;
    } else if (this.age === user2.age) {
      ageDiff = `${user2.fullName} and ${this.fullName} are same age`;
    } else {
      ageDiff = `${user2.fullName} is older than ${this.fullName}`;
    }

    console.log(ageDiff);
  }
}

const user1 = new User('John', '35');
const user2 = new User('Mary', '025');

user1.compare(user2);