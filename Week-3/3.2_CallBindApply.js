// Run the methods one by one(All methods applies to same object).

// call method -----------------------------------------------------------------------------------------------

const person1 = {
    firstName: "Saurabh",
    lastName: "Galgale",
    fullName: function(age,sport) {
        console.log(`My name is ${this.firstName} ${this.lastName}. I'm ${age} years old. I love ${sport}.`);
    }
}

const person2 = {
    firstName: "Ashish",
    lastName: "Dalwi"
}

// used same method for multiple objects by usin call. 

person1.fullName.call(person2,22,"cricket");


// apply method ----------------------------------------------------------------------------------

// apply method consists square brackets[].
person1.fullName.apply(person2,[22,"cricket"]);


//bind method ------------------------------------------------------------------------------------------

//  bind method creates a new function 
//  and takes an object as first argument. 


// it will not work without Bind.
// const newFn = person1.fullName;
// newFn();

const newFn = person1.fullName.bind(person2);
newFn(22,"cricket");












