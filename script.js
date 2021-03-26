function circumferenceOfCircle(){
var circleRadius = parseInt(prompt("Please enter the radius of circle:"));
var circumferenceOfCircle = 2 * Math.PI * circleRadius;
document.getElementById("circumference_status").innerHTML="The circumference of the circle is " + circumferenceOfCircle;
}
function areaOfCircle(){
var circleRadius = parseInt(prompt("Please enter the radius of circle:"));
var areaOfCircle = Math.PI * circleRadius ^ 2;
document.getElementById("area_status").innerHTML="The area of the circle is " + areaOfCircle;
}
