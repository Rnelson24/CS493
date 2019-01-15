var myArray = ["John", "Jill", "Jack", 5, 5+10];
console.log(myArray[0]);
console.log(myArray.length);

myArray[0] = "Jonathan";

for (var i=0; i<myArray.length; i++){

    console.log(myArray[i]);

}

// var temp="Dog,Cat,Deer,Rabbit,Bear";
// myArray = temp.split(",");

//You can also split the elements that are separated by ":"
var temp="Dog:Cat:Deer:Rabbit:Bear";
myArray = temp.split(":");
console.log("length is now " + myArray.length);

for (var i=0; i<myArray.length; i++){

    console.log("element at index " + i + " is " + myArray[i]);

}

// var btnList = document.getElementsByClassName("btn");

//To select only the button class under header 
var btnList = document.querySelectorAll("header .btn");

for (var i=0; i< btnList.length; i++){

    btnList[i].innerHTML = "Menu";
}


//Another example
var ulList = document.getElementById("ullist");

if (!(ulList === null)) {
    for (var i = 0 ; i <ulList.children.length ; i++){
        console.log(ulList.children[i]);
        console.log(ulList.children[i].innerHTML);
    }
}


