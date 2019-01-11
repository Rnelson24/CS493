
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
