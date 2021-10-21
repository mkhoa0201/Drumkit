
// A normal function
/*document.querySelector("button").addEventListener("click", handleClick)
function handleClick(){
    alert("Hello"); 
}*/


var numberofDrums = document.querySelectorAll(".drum").length;

//forloops
for (var i = 0; i < numberofDrums; i++) {

    // An Anonymous Function
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play(); 
 }); 

}





