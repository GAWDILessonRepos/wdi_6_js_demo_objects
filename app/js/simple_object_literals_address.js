var judy = {
  name: "Judy Dench",
  age: 32
};
var fred = {
  name: "Fred Armison",
  age: 27
};

/*
Objects can have objects.
The siblings property's value is an Array
The address property's value is a Object literal.
The describe property's value is a Function, which is also an object.
*/

var jason = {
  name: "Jason Wharff",
  age: 34,
  occupation: "Software Developer",
  siblings: [judy,fred],
  address: {
    street: '44 Warren St.',
    city: 'Stoneham',
    state: 'MA',
    zip: 01345,
    display: function(){
       return this.street + ", " + this.city + ", " + this.state;
    }
  },
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

// Show all the properties and their value.
/*
for(var prop in jason){
  //console.log(joe.name + " property = " + prop + ", value is " + joe[prop]);
}
*/