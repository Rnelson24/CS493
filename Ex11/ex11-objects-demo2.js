//code for 1/17/2019
var student = {
    name: "John Doe",
    age: 24,
    id: "123456789",
    gender: "male",
    address: {
        number: "56",
        street: "Main St.",
        city: "Brooklyn",
        zip: "12345",
        state: "NY"
    },
    courses: ["CS397", "CS291", "CS493"],
    getAddress: function(){
        return this.address.number + " " + this.address.street + " " + this.address.city + " " + this.address.state + " " + this.address.zip;
    }
} 
console.log(student);
console.log(student.name + " is " + student.gender);
console.log("City is " + student.address.city);
console.log("Address is " + student.getAddress());









