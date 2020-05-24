// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const aiden = { name: 'aiden', age: 32 };
print(aiden);

// with JavaScript magic (dynamically typed language)
// can add properties later
aiden.hasjob = true;
console.log(aiden.hasjob);

// can delete properties later
delete aiden.hasjob;
console.log(aiden.hasjob);

// 2. Computed properties
// key must be string
console.log(aiden.name);
console.log(aiden['name']);
aiden['hasjob'] = true;
console.log(aiden.hasjob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(aiden, 'name');
printValue(aiden, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('aiden', 32);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in aiden);
console.log('height' in aiden);
console.log(aiden.height);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in aiden) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 3, 5, 7, 9];
for (value of array) {
  console.log(value);
}
for (key in array) {
  console.log(key); // key in array is index
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'aiden', age: 20 };
const user2 = user;
user2.name = 'coder';
console.log(user);
user2.name = 'aiden';

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
