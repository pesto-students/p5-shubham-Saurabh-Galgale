let Person = function() {};
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
class Teacher extends Person {
    constructor() {
        super();
        this.teach = function(subject) {
            console.log(`${this.name} is now teaching ${subject}`);
        }; 
    }
}


let him = new Teacher();

him.initialize("Shubham", 25);
him.teach("javaScript");



