let Person = function() {};
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
const Teacher = new Person();
// we can access .initialize from Person in Teacher.
console.log("initialize" in Teacher); // true

Teacher.teach = function(subject) {return `${this.name} is now teaching ${subject}`;}

//Object Inheritance
let him = Object.create(Teacher)

// can access everithing with object him.
console.log(him);
him.initialize("Shubham", 25);
console.log(him.teach("javaScript"));

