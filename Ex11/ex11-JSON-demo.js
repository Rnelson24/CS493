var requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.addEventListener("load", reqListener);

var studentList;

function reqListener(){

    studentList = request.response;
    populateList();

}
var studentData=document.getElementById("studentData");

function populateList(){

    for (let n of studentList){
        var previousHTML = studentData.innerHTML;
        var string = "<tr><td >"+n.fname+"</td><td >"+ n.lname+"</td>";
        string += "<td >"+n.address + " " + n.city + " " + n.zip + "</td><td >"+ n.tel+"</td></tr>";
        studentData.innerHTML = previousHTML+string;   
    }
}



// [
//     {
//         "fname": "Leilani",
//         "lname": "Hencmann",
//         "tel": "(380)452-5804",
//         "address": "9502 Et Ln",
//         "city": "Union City",
//         "state": "VA",
//         "zip": 91524
//     },
//     {
//         "fname": "Yvette",
//         "lname": "Shute",
//         "tel": "(422)108-1428",
//         "address": "2543 Dolor Dr",
//         "city": "Selma",
//         "state": "AL",
//         "zip": 56065
//     },
//     {
//         "fname": "Melissa",
//         "lname": "Ellingwood",
//         "tel": "(420)301-2187",
//         "address": "8705 Amet Dr",
//         "city": "Lockhart",
//         "state": "DE",
//         "zip": 26305
//     },
//     {
//         "fname": "Donna",
//         "lname": "Kirk",
//         "tel": "(907)666-4936",
//         "address": "2737 Odio St",
//         "city": "Brooklyn",
//         "state": "SC",
//         "zip": 80516
//     },
//     {
//         "fname": "Shunita",
//         "lname": "Woode",
//         "tel": "(304)774-6244",
//         "address": "4222 Vestibulum St",
//         "city": "Cincinnati",
//         "state": "TX",
//         "zip": 39594
//     },
//     {
//         "fname": "Lorena",
//         "lname": "Rock",
//         "tel": "(108)658-3086",
//         "address": "7333 Amet St",
//         "city": "Blacksburg",
//         "state": "IN",
//         "zip": 16112
//     },
//     {
//         "fname": "Alyce",
//         "lname": "Madjid",
//         "tel": "(637)921-9594",
//         "address": "8884 Morbi Rd",
//         "city": "Dinwiddie",
//         "state": "IN",
//         "zip": 56694
//     },
//     {
//         "fname": "Laurence",
//         "lname": "Olson",
//         "tel": "(888)976-5338",
//         "address": "64 Donec St",
//         "city": "Sun Prairie",
//         "state": "AR",
//         "zip": 83612
//     },
//     {
//         "fname": "Alyce",
//         "lname": "Proctor",
//         "tel": "(664)594-5965",
//         "address": "4631 Sit Dr",
//         "city": "Murfreesboro",
//         "state": "MT",
//         "zip": 14919
//     },
//     {
//         "fname": "Lucy",
//         "lname": "Tabor",
//         "tel": "(541)986-1325",
//         "address": "187 Dui Dr",
//         "city": "Ft Lauderdale",
//         "state": "WV",
//         "zip": 73549
//     }
// ]



// var person = {
//     name:"Jane Doe",
//     age: 40,
//     address:{
//         "street":"123 Avenue T",
//         "city":"Brooklyn"
//     },
//     jobs:["programmer","designer"],
//     // email: function(){
//     //     return this.name +'@gmail.com';
//     // }
// }

// console.log(person); //object
// person = JSON.stringify(person);
// console.log(person); //string

// person = JSON.parse(person);
// console.log(person); //object


// person = JSON.stringify(person);
// person = JSON.parse(person);
// console.log(person);


