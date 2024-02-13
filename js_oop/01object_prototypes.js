//! Object Prototypes in JavaScript
/*
* Certain objects, like an array, has many methods built in, and quite a few begin with prototype.(something).
* All methods are under the __proto__ property which contains all the methods we do use, like .pop, .includes, .push, etc.
This is not exclusive to arrays, you'll find them in document.body, objects, etc.
? For example, prototype are where are of our string methods are stored and we can add to them to make our own custom methods.
* The idea boils down to having a single object that contains common properties and methods that other copies/other objects of arrays/strings look up to find their common properties.
It's a blueprint in essence!
? Sidenote: __prototype__ is a - REFERENCE - to the prototype array.
? .prototype is the actual object you can add on to.
! If anything here, you'll be accessing prototype directly in rare cases but it's good to know regardless.
*/

String.prototype.yell = function () {
  return `WHAT!? ${this.toUpperCase()}!!!!!!!!`;
};

console.log("I love you".yell());

Array.prototype.pop = function () {
  return "I sorry I want that element, I won't pop it off!";
};

//! OOP in JavaScript
/*
! Constructor Functions & the 'New' Keyword
* Constructors functions are a bit weird compared to other programming languages.
* First of all, there are NO return values in constructors and we'll frequent the 'this' keyword quite a bit.
? The capital letter helps us differentiate that it's not a normal function, it's a function that will help us create objects instead.
* The 'new' keyword first creates a blank, plain JS object and then links it to another object.
* Then, it passes the newly created object to be able to use 'this'.
? Returns 'this' if the function doesn't return its own objects.
! Note: Remember not to use arrow functions when declaring methods as they cannot use 'this'.
*/

//! Constructor Function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.giveYear = function () {
  const { year } = this;
  return year;
};

const car1 = new Car("Subaru", "CrossTrek", "2021");
console.log(car1.model);

console.log(car1.giveYear());

/*
! JS Classes - Syntactical Sugar
* This is a newer addition to JS which provides us a cleaner way to do exactly what we did above.
* We don't have to add methods manually or breakup contructor functions, or deal with seperate methods on the prototype.
? To begin, we use a lowercase 'class' and and uppercase name of our choosing for it.
? Then, we begin with a constructor function that will execute whenever a new iteration of the class is created.
? Similar to the constructor function, we initialize values with 'this.something' = something; it automatically refers to a new object.
* Typically, these things match (this.year = year) but they don't need to! (this.makeYear = year is okay too.)
! The real advantage of JS Classes are the ease in which we can implement methods. 
*/

class Automobile {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // console.log("This is happening inside the constructor!");
    // console.log(make, model, year);
  }
  carInfo() {
    const { year, make, model } = this;
    return `This is a ${year} ${make} ${model}.`;
  }
}

const car2 = new Automobile("Subaru", "CrossTrek", "2021");
console.log(car2.carInfo());

/*
! Extends & Super - Subclassing & Inheritance
! Extends:
* Let's do something really cliche to demonstrate these ideas.
* We can see that most of the content in these classes are similar or exactly the same while one or two pieces differ.
? This is where extends comes in. 
* Extends is like a parent-child relationship where the children will share some commonalities but also be able to have their differences as well.
* Now, anything that extends a parent class will inherit attributes and methods and be able to have its own attributes and properties as well.
* An identical method name will execute in the child, probably as it's more specific.

! Super:
* If you wanted to have some additional information for a class (not part of what it extends from), you can use the super keyword, which will reference the class it's extending from, call that constructor, and add any additional information.
* Simply, it's reusing information from the base constructor and allowing us to add unique attributes to classes that extend from it.
*/

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  //! Super Example:
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  // eat() {
  //   return `${this.name} is eating.`;
  // }
  meow() {
    return "Meow!";
  }
}

// const snickers = new Cat("Snickers", 9);
// console.log(snickers.eat());

//! Super Example:
const monty = new Cat("Monty", 9);
console.log(monty); // { name: 'Monty', age: 9, livesLeft: 9 }

class Dog extends Pet {
  // constructor(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }
  // eat() {
  //   return `${this.name} is eating.`;
  // }
  bark() {
    return "Bork!";
  }
}

// const bailey = new Dog("Bailey", 12);
// console.log(bailey.eat());

const buddy = new Dog("Buddy", 11);
console.log(buddy.bark());
console.log(buddy.eat());
