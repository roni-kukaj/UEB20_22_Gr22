let date = new Date();
let dateString = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
document.getElementById("date").innerHTML = dateString;

let social_media = ["facebook", "twitter", "googleplus", "linkedin"];
console.log(social_media[0]);
console.log(social_media[1]);
console.log(social_media[2]);
console.log(social_media[3]);


let draggableObject = document.getElementById("draggableObject");
let dropTarget = document.getElementById("dropTarget");
let resetButton = document.getElementById("resetButton");

draggableObject.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData