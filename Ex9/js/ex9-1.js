//Function Declaration and how function is invoked.

function add(x,y){
    // var sum;
    // sum = x+y;
    // return sum;
    return x+y;
}

// var result = add(5, 10);
// alert(result);

alert(add(5,10));

function displayName(name, age){
    if (age < 30) {
        alert("Hi " + name + "!!!");
    } else {
        alert("Good morning " + name);
    }
}

displayName("John", 24);
displayName("Mary", 50);
displayName("Jill", 30);

var n = prompt();
n=5;
alert(sumofN(n));
var n;

//This is the function for Ex9 Question 5
function sumofN(n){
    var sum = 0;
    for (var i = 1; i<=n; i++){
        // sum = sum+i;
        sum+=i;
    }
    return sum;
}

//the following code is to demonstrate 'Execution Context' and 'Scope Chain' in JavaScript

var x;
console.log ("x in global scope = " + x);
a();



function a(){
    // var x =10;
    console.log ("x in a() = " + x);
    function b(){
        console.log ("x in ]b() = " + x);
    }
    b();
}

// function a(){
//     var x =10;
//     console.log ("x in a() = " + x);
//     b();
// }

// function b(){
//     console.log ("x in ]b() = " + x);
// }




