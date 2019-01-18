document.addEventListener("DOMContentLoaded", init);

function init(){
    //Solution for Q#1
    function product(x,y){
        alert(x*y);
    }
    var first = prompt();
    var second = prompt();
    product(first, second);

    //Solution for Q#2
    function concatenate(string1, string2){
        return (string1.charAt(0).toUpperCase() + string1.slice(1) + " " +string2.charAt(0).toUpperCase()+ string2.slice(1));
    }
    var firsttext = prompt("Input your first string: ");
    var secondtext = prompt("Input your second string: ");
    console.log(concatenate(firsttext, secondtext));

    //Solution for Q#3
    var menu= ["Pizza", "Pasta", "Noodle", "Sushi", "Sandwich", "Burger"];
    var menulist = document.getElementById("menulist");
    function populateArray(){
        var currentlist = menulist.innerHTML;
        for (n of menu){
            currentlist+=  "<li>" + n + "</li>";
        }
        menulist.innerHTML=currentlist;
    }
    populateArray();

    //Solution for Q#4
    var student ={
        fname: "Harry",
        lname: "Potter",
        GPA: 2.98,
        major: "Computer Science",
        college: "York College-CUNY"
    }


    function populateObject(){
        document.getElementById("name").innerText=student.fname;
        document.getElementById("last-name").innerText=student.lname;
        document.getElementById("gpa").innerText=student.GPA;
        document.getElementById("major").innerText=student.major;
        document.getElementById("college").innerText=student.college;
    }
    populateObject();
    //Solution for Q#5
    var requestURL = "http://www.filltext.com/?rows=20&company={business}&country=[%22USA%22,%22Canada%22,%20%22England%22,%22China%22]&pretty=true";
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.addEventListener("load", reqListener);
    var companyList;
    function reqListener(){

        companyList = request.response;
        populateCompany();
    }
    var companylist = document.getElementById("companylist");

    function populateCompany(){
        var currentlist = companylist.innerHTML;
        for (n of companyList){
            if (n.country=="USA"){
                currentlist+=  "<li>" + n.company + "</li>";
            }
        }
        companylist.innerHTML=currentlist;        
    }

    
}