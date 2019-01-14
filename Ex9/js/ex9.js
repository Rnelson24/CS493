
document.addEventListener("DOMContentLoaded" , init );

function init(){
    document.getElementsByClassName("btn")[0].addEventListener("click", showText);
    document.getElementsByClassName("btn")[1].addEventListener("click", addNewMenu);
    document.getElementsByClassName("btn")[2].addEventListener("click", removeMenu);
    document.getElementsByClassName("btn")[3].addEventListener("click", changeImage);
    document.getElementsByClassName("btn")[4].addEventListener("click", showAlert);


    document.getElementById("btn-new-task").addEventListener("click", addToDo );
    var todoList = document.getElementById("todo-tasks");
    var newtask = document.getElementById("new-task");

    function addToDo(){
        // alert("hello ");
        var listItem = document.createElement("li");
        var checkBox = document.createElement("input");
        var label = document.createElement("label");
        var deleteButton = document.createElement("button");

        checkBox.type ="checkbox";
        deleteButton.className ="delete";
        deleteButton.innerText = "X";

        label.innerText = newtask.value;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);



    }



    function addNewMenu(){
        var ulist = document.querySelector("ul.nav");
        var listitem = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.innerHTML="New Menu";
        anchor.setAttribute("class","nav-link");
        anchor.setAttribute("href","#");
        listitem.appendChild(anchor);
        ulist.appendChild(listitem);
    }
    function removeMenu(){
        var ulist = document.querySelector("ul.nav");
        var lastchild = ulist.lastElementChild;
        ulist.removeChild(lastchild);
    }

    function showAlert(msg){
        var alertString="<div class='alert alert-success'>";
        alertString += msg + "</div>";
        document.getElementById("alertbox").innerHTML= alertString;
    }
    function showText(){
        var showText="I love coding!!!";
        document.getElementById("leadtext").innerHTML= showText;
    }

    function changeImage(){

        var myImage = document.querySelector("img");
        var imageFile = myImage.getAttribute("src");
        
        if (imageFile == "image/YorkLogo-1.png") {
            myImage.setAttribute("src","image/YorkLogo-2.png");
        } else {
            myImage.setAttribute("src","image/YorkLogo-1.png");
        }
    }

}






